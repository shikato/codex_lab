/* Write , a mailer like the Gmail. */
var mailer = document.createElement('div');
mailer.innerHTML = '<form><input type="text" name="to" placeholder="To"><input type="text" name="subject" placeholder="Subject"><textarea name="body" placeholder="Body"></textarea><input type="submit" value="Send"></form>';
document.body.appendChild(mailer);
