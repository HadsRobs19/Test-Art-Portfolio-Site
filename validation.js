function firstNameRegEx(first) {
    let firstReg = /^[A-Z][a-z]*/;

    if (first.match(firstReg)) {
        console.log("First name is valid");
        return true;
    } else {
        console.log("First name is invalid");
        return false;
    }
}

function lastNameRegEx(last) {
    let lastReg = /^[a-zA-Z\s']+$/;

    if (last.match(lastReg)) {
        console.log("Last name is valid");
        return true;
    } else {
        console.log("Last name is invalid");
        return false;
    }
}

function validate() {
    let firstname_valid = false;
    let lastname_valid = false;

    //First name validation
    document.myform.firstname.onblur = function () {
        let thisFirst = this.value;
        let firstBlur = document.getElementById("userFirstName");
        let firstSpan = document.createElement("span");

        firstBlur.appendChild(firstSpan);

        let span = firstBlur.getElementsByTagName("span");

        if (firstNameRegEx(thisFirst)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Success!"));

                firstname_valid = true;
            } else {
                span[0].firstChild.nodeValue = "Success!";
                firstname_valid = true;
            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("ERROR!"));
                firstname_valid = false;
            } else {
                span[0].firstChild.nodeValue = "ERROR!";
                firstname_valid = false;
            }
        }

    };

    document.myform.firstname.onfocus = function () {
        let firstFocus = document.getElementById("userFirstName");
        let firstSpanTag = document.getElementsByTagName("span");

        if (firstSpanTag.length > 0 && spanTag[0].firstChild) {
            firstSpanTag[0].firstChild.nodeValue = "Please enter your first name";
        } else {
            let firstSpan = document.createElement("span");
            firstSpan.appendChild(document.createTextNode("Please enter your first name"));

            firstFocus.appendChild(firstSpan);
        }
    }

    //Last name validation
    document.myform.lastname.onblur = function () {
        let thisLast = this.value;
        let lastBlur = document.getElementById("userLastName");
        let lastSpan = document.createElement("span");

        lastBlur.appendChild(lastSpan);

        let span = lastBlur.getElementsByTagName("span");

        if (lastNameRegEx(thisLast)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Success!"));

                lastname_valid = true;
            } else {
                span[0].firstChild.nodeValue = "Success!";
                lastname_valid = true;
            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("ERROR!"));
                lastname_valid = false;
            } else {
                span[0].firstChild.nodeValue = "ERROR!";
                lastname_valid = false;
            }
        }

    };

    document.myform.lasstname.onfocus = function () {
        let lastFocus = document.getElementById("userLastName");
        let lastSpanTag = document.getElementsByTagName("span");

        if (lastSpanTag.length > 0 && spanTag[0].firstChild) {
            lastSpanTag[0].firstChild.nodeValue = "Please enter your last name";
        } else {
            let lastSpan = document.createElement("span");
            lastSpan.appendChild(document.createTextNode("Please enter your last name"));

            lastFocus.appendChild(lastSpan);
        }
    }
}