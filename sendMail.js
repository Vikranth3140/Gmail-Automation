function sendMail() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startRow = 2;
  var numRows = 1;
  var dataRange = sheet.getRange(startRow, 1, numRows, 3);
  var data = dataRange.getValues();
  for (var i in data){
    var row = data[i];
    var name = row[0];
    var emailAddress = row[1];
    var category = row[2]

    var subject = "Invitation for Collaboration from XYZ Company";
    message = "Dear " + name +", <br>Greetings of the day.<br><br>I hope this email finds you well. My name is John Doe, and I am reaching out to you from XYZ Company. We came across your profile and were impressed by your accomplishments in the field of " + category +". We believe that your expertise would be a great fit for our upcoming project. <br><br>We would love to have a conversation with you about potential collaboration opportunities. Please let us know a suitable time for you, and we will arrange a call accordingly. <br><br>Looking forward to hearing from you soon. <br><br>Best Regards, <br>Vikranth Udandarao <br>TEDx Curator <br>+91 98xxxxxxxx | vikranth@xyz.com";
    var options = {
      "htmlBody":message
    }
    GmailApp.sendEmail(emailAddress, subject, "", options);
    console.log(name);
  }
}