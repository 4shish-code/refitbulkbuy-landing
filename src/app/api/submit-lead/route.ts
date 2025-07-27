import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate the payload
    if (!data.fields || !data.fields.name || !data.fields.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Ensure email is included in the payload
    if (!data.fields.email) {
      console.warn('Email field is empty, setting to empty string');
      data.fields.email = "";
    }
    
    // Format the payload for curl
    const payload = JSON.stringify(data);
    
    // Construct the curl command exactly as shown in the screenshot
    const curlCommand = `curl --location --request POST 'https://api.telecrm.in/enterprise/682f48ff3bc6439004708f66/autoupdatelead' \\
      --header 'Authorization: Bearer 34979017-8fa3-445b-bde1-cab5d435198e1752058298716:f662f83e-4461-4190-b97b-e10c9ab248d8' \\
      --header 'Content-Type: application/json' \\
      --data-raw '${payload.replace(/'/g, "\\'")}'`;
    
    console.log('Executing curl command:', curlCommand);
    
    // Execute the curl command
    const { stdout, stderr } = await execPromise(curlCommand);
    
    if (stderr) {
      console.error('Curl command error:', stderr);
      return NextResponse.json(
        { error: 'Error executing curl command', details: stderr },
        { status: 500 }
      );
    }
    
    console.log('Curl command response:', stdout);
    
    // Try to parse the response as JSON
    try {
      const responseData = JSON.parse(stdout);
      return NextResponse.json(responseData);
    } catch (e) {
      // If response is not valid JSON, return it as plain text
      return NextResponse.json({ message: 'Success', response: stdout });
    }
    
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 