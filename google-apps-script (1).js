// Google Apps Script for Leka Video Survey
// Deploy this as a Web App to receive form submissions

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if this is the first submission (need to add headers)
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Name',
        'Age',
        'Videos per month (>10 min)',
        'Hours on YouTube',
        'Hours on other platforms',
        'Average video length',
        'Want to save time?',
        'Videos saved per month',
        'What happens to saved videos',
        'Frustration level (1-10)',
        'Tool usefulness (1-10)',
        'Use other solutions?',
        'Name other solutions',
        'Liked features',
        'Missing features',
        'Other ways to watch faster',
        'Expected price per month',
        'Willing to pay for 1-year',
        'Feelings about fluff',
        'Purpose of watching',
        'Email'
      ];
      sheet.appendRow(headers);
    }
    
    // Prepare the row data
    const row = [
      new Date(), // Timestamp
      data.q1 || '',
      data.q2 || '',
      data.q3 || '',
      data.q4 || '',
      data.q5 || '',
      data.q6 || '',
      data.q7 || '',
      data.q8 || '',
      data.q9 || '',
      data.q10 || '',
      data.q11 || '',
      data.q12 || '',
      data.q13 || '',
      data.q14 || '',
      data.q15 || '',
      data.q16 || '',
      data.q17 || '',
      data.q18 || '',
      data.q19 || '',
      data.q20 || '',
      data.q21 || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Response recorded' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to verify script works
function test() {
  Logger.log('Script is working!');
}
