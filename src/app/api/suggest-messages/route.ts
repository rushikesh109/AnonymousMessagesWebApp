// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';
// import { NextResponse } from 'next/server';

// // Initialize OpenAI with your API key from environment variables
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // Set the runtime environment to Edge
// export const runtime = 'edge';

// // Define the handler for the POST request
// export async function POST(req: Request) {
//   try {
//     // Define the prompt for generating questions
//     const prompt = `Create a list of three open-ended and engaging questions formatted as a single string. 
//       Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, 
//       and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes 
//       that encourage friendly interaction. For example, your output should be structured like this: 
//       'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. 
//       Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.`;

//     // Call the OpenAI API with the prompt and get a streaming response
//     const response = await openai.completions.create({
//       model: 'gpt-3.5-turbo-instruct',
//       max_tokens: 400,
//       stream: true, // Enable streaming
//       prompt,      // Provide the defined prompt
//     });

//     // Stream the response back to the client
//     const stream = OpenAIStream(response);
//     return new StreamingTextResponse(stream);
    
//   } catch (error) {
//     // Error handling for OpenAI-specific errors
//     if (error instanceof OpenAI.APIError) {
//       const { name, status, headers, message } = error;
//       return NextResponse.json(
//         { name, status, headers, message },
//         { status } // Return the status from OpenAI
//       );
//     } else {
//       // General error handling
//       console.error('An unexpected error occurred:', error);
//       return NextResponse.json(
//         { error: 'Internal Server Error', message: error },
//         { status: 500 }
//       );
//     }
//   }
// }
