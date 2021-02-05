const employees = require('./index');

const htmlTemplate = (employeesArray) =>
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA=="
        crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="stylesheet" href="./develop/style.css">
    <title>Dream Team</title>
</head>

<body>
    <header class="container-fluid">
        <h1>Welcome to the Dream Team!</h1>
    </header>

    <section class="container" id="main">
        <div class="row" id="employeesRow">

        </div>
    </section>


    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"
        integrity="sha512-XKa9Hemdy1Ui3KSGgJdgMyYlUg1gM+QhL6cnlyTe2qzMCYm4nAZ1PsVerQzTTXzonUR+dmswHqgJPuwCq1MaAg=="
        crossorigin="anonymous"></script>
    <script>
        $(document).ready(function () {
            const employeesRow = $('#employeesRow');
            employeesArray.forEach((e) => {
                const card = $('<div/>').attr('class','card').attr('id','memberCard')
                const card_header = $('<div/>').attr('class', 'card-header')
                const name = $('<p/>').attr('id', 'name').textContent(${(e.name)});
                const role = $('<p/>').attr('id', 'role').textContent(${(e.icon)}, ${(e.role)});
                const card_body = $('<div/>').attr('class', 'card-body');
                const idInfo = $('<div/>').attr('class','info');
                const emailInfo = $('<div/>').attr('class','info');
                const descInfo = $('<div/>').attr('class','info');
                const id = $('<p/>').attr('id', 'id').textContent(${(e.id)});
                const email = $('<p/>').attr('id', 'role').textContent(${(e.email)});
                const desc = $('<p/>').attr('id', 'desc').textContent(${(e.info)});
                idInfo.append(id);
                emailInfo.append(email);
                descInfo.append(desc);
                card_header.append(name);
                card_header.append(role);
                card_body.append(idInfo);
                card_body.append(emailInfo);
                card_body.append(descInfo);
                card.append(card_header);
                card.append(card_body);
                employeesRow.append(card);
            })
        
        });
    </script>
</body>

</html>
`

module.exports = htmlTemplate;

