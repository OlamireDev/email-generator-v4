function capitalizeName(name) {
            return name.toUpperCase();
        }


        function getCurrentFormattedDate() {
            const date = new Date();
            const months = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const month = months[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            return `${month} ${day}, ${year}`;
        }

        const formattedDate = getCurrentFormattedDate();
        function formatNumberToMoney(number) {
            return Number(number)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        function generateEmail() {
            const customerName = document.getElementById('customerName').value.trim();
            const amountDisbursed = formatNumberToMoney(document.getElementById('amountDisbursed').value);
            var amountToPay = document.getElementById('amountToPay').value;
            const customerAddress = document.getElementById('customerAddress').value.trim();
            const discountPercentage = Number(document.getElementById('discountPercentage').value);
            if (customerName === '' || amountDisbursed === '' || amountToPay === '') {
                alert('Please fill in all fields');
                return;
            }

            var discountText = ``;
            if(discountPercentage > 0){
                console.log('Percentage calculation '+ discountPercentage);
                amountToPay = Number(amountToPay);
                const discount = amountToPay -((discountPercentage/100) * amountToPay);
                amountToPay = discount;
                discountText = `(discounted)`;
            }

            amountToPay = formatNumberToMoney(amountToPay);

            const capitalizedCustomerName = capitalizeName(customerName);

            const subject = `<span>DEMAND NOTICE ON THE INDEBTEDNESS OF <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold></span>`;
            const body = `
            <bold bold style="font-weight: bold">${formattedDate}</bold>
            <br/>
            Attn: <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold>
            <br/>
            <bold bold style="font-weight: bold; font-style: italic">${capitalizeName(customerAddress)} </bold>
            <p>Fairmoney Microfinance Bank is in custody of your executed contract in favour of <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold> whom we availed the sum of <bold style="font-weight: bold">₦ ${amountDisbursed}</bold>
            <br/>
            <br/>
            Consequently, you have reneged and not complied with the terms and conditions of your loan agreement with us. This is evidenced by your inability to honor your repayments. Your outstanding balance owed as at today <bold style="font-weight: bold">₦ ${amountToPay}</bold> ${discountText}
            <br/>
            <br/>
            The bank views your action as totally Unacceptable. Without prejudice, <bold style="font-weight: bold">We are by this mail, giving you 2 working days to regularize your outstanding payment,</bold> failure to comply, We would be taking robust recovery actions in line with the ambit of the law. I am hopeful we can resolve this without going through legal proceedings or commissioning an external debt recovery agency to pursue this debt. Feel free to contact us if you would like to discuss payment options.
            <br/>
            <br/>
            It is our earnest hopes you digest the above and be guided accordingly.
            <br/>
            <br/>
            <i bold style="font-weight: bold">
            You can pay into your FairMoney Microfinance bank account, login into the app and click on ‘’repay” and follow the prompt to make payment. We are here to assist you through this process. For any inquiries or assistance, please don't hesitate to call us on +2347080112196 or +2348150284317, or send an email to <a href="mailto:collections@fairmoney.io">collections@fairmoney.io</a>.
            </i>  
            </p>`;

            document.getElementById('emailSubject').innerHTML = subject;
            document.getElementById('emailBody').innerHTML = body;
        }

        function generateFollowUpEmail() {
            const customerName = document.getElementById('customerName').value.trim();
            const amountToPay = formatNumberToMoney(document.getElementById('amountToPay').value);
            const customerAddress = document.getElementById('customerAddress').value.trim();
            if (customerName === '' || amountToPay === '') {
                alert('Please fill in all fields');
                return;
            }

            const capitalizedCustomerName = capitalizeName(customerName);

            const subject = `<span>FINAL DEMAND NOTICE ON THE INDEBTEDNESS OF <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold></span>`;
            const body = `
            <br/>
            <bold bold style="font-weight: bold">
            ${formattedDate}
            </bold>
            <br/>
            Attn: <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold>
            <br/>
            <bold bold style="font-weight: bold; font-style: italic">${capitalizeName(customerAddress)} </bold>
            <br/>
            <br/>
            The records before us <bold bold style="font-weight: bold"> FAIRMONEY MICROFINANCE BANK </bold>, shows that you have failed, vehemently refused, and neglected to honour your obligations under the loan agreement with us by not paying your monthly installments as at when due.
            We hereby take cognizance of the various demand notices sent to you. TAKE NOTICE, therefore, that if you do not settle your outstanding/indebtedness to us in the sum of <bold bold style="font-weight: bold">${amountToPay} NGN </bold> representing outstanding installments and associated charges as at today, we shall proceed and take legal actions on you.
            <br/>
            <br/>
            You are expected to regularize your account with us within <bold bold style="font-weight: bold"> (24)hours </bold>  of this notice.
            <br/>
            <br/>
            Be guided accordingly.
            <br/>
            <br/>
            <i bold style="font-weight: bold">
            You can pay into your FairMoney Microfinance bank account, login into the app and click on ‘’repay” and follow the prompt to make payment. We are here to assist you through this process. For any inquiries or assistance, please don't hesitate to call us on +2347080112196 or +2348150284317, or send an email to <a href="mailto:collections@fairmoney.io">collections@fairmoney.io</a>.
            </i>  
            `;

            document.getElementById('emailSubject').innerHTML = subject;
            document.getElementById('emailBody').innerHTML = body;
        }

        function generateScheduledVisitationNotice() {
            const customerName = document.getElementById('customerName').value.trim();
            const amountToPay = formatNumberToMoney(document.getElementById('amountToPay').value);
            const customerAddress = document.getElementById('customerAddress').value.trim();
            if (customerName === '' || amountToPay === '') {
                alert('Please fill in all fields');
                return;
            }

            const capitalizedCustomerName = capitalizeName(customerName);

            const subject = `<span>SCHEDULED VISITATION <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold></span>`;
            const body = `
            <br/>
            <bold bold style="font-weight: bold">
            ${formattedDate}
            </bold>
            <br/>
            Attn: <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold>
            <br/>
            <bold bold style="font-weight: bold; font-style: italic">${capitalizeName(customerAddress)} </bold>
            <br/>
            <br/>
            This is to inform you that<bold bold style="font-weight: bold"> FAIRMONEY MICROFINANCE BANK </bold> has scheduled a visit concerning your unsettled loan. You are required to settle the full balance of <bold bold style="font-weight: bold">${amountToPay} NGN </bold> within 24 hours of receiving this notice.
            <br/>
            <br/>
            <i bold style="font-weight: bold">
        For any inquiries or further information, please contact us through this channel or call +2348169477736
            </i>  
            `;

            document.getElementById('emailSubject').innerHTML = subject;
            document.getElementById('emailBody').innerHTML = body;
        }

        function generateStrictDemandNotice() {
            const customerName = document.getElementById('customerName').value.trim();
            if (customerName === '') {
                alert('Please fill in all fields');
                return;
            }

            const capitalizedCustomerName = capitalizeName(customerName);

            const subject = `<span>Final Notice of Default – Immediate Repayment Required</span>`;
            const body = `<strong>VISITATION & STRICT DEMAND NOTICE</strong><br/><br/>

        Dear <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold>,<br/><br/>

        This is an official and final demand concerning your <strong>FairMoney account</strong>, which remains in a state of <strong>critical default</strong>.<br/><br/>

        You are hereby <strong>instructed to clear the entire outstanding balance no later than 6:00 PM today.</strong> This deadline is firm and non-negotiable.<br/><br/>

        Failure to comply will result in the <strong>immediate activation of intensive recovery actions</strong>, including but not limited to:
        <ol>
        <li><strong>Physical visitation by our field recovery officers</strong></li>
        <li><strong>Skip tracing to confirm your current location and place of work</strong></li>
        </ol><br/>

        Let it be clearly understood:  
        <strong>There will be no extensions. No additional warnings will follow.</strong><br/><br/>

        You are advised to treat this notice with utmost seriousness and act accordingly to avoid further consequences.

            `;

            document.getElementById('emailSubject').innerHTML = subject;
            document.getElementById('emailBody').innerHTML = body;
        }

        function generateDiscountEmail() {
            const customerName = document.getElementById('customerName').value.trim();
            const amountDisbursed = formatNumberToMoney(document.getElementById('amountDisbursed').value);
            var amountToPay = document.getElementById('amountToPay').value;
            const customerAddress = document.getElementById('customerAddress').value.trim();
            const discountPercentage = Number(document.getElementById('discountPercentage').value);
            const daysOverdue = Number(document.getElementById('daysOverdue').value);
            if (customerName === '' || amountDisbursed === '' || amountToPay === '') {
                alert('Please fill in all fields');
                return;
            }

            var discountAmountToPay = amountToPay

            if(discountPercentage > 0){
                console.log('Percentage calculation '+ discountPercentage);
                amountToPay = Number(amountToPay);
                discountAmountToPay = amountToPay -((discountPercentage/100) * amountToPay);
            }

            amountToPay = formatNumberToMoney(amountToPay);
            discountAmountToPay = formatNumberToMoney(discountAmountToPay)

            const capitalizedCustomerName = capitalizeName(customerName);

            const subject = `<span>Settlement Offer Available – Please Act Now to Avoid Escalation</span>`;
            const body = `
            <p>Dear ${capitalizedCustomerName},</p>

            <p>Your FairMoney loan, overdue for over ${daysOverdue} day(s), has been reviewed, and you are now eligible for a special settlement offer to help you clear your outstanding balance.</p>

            <p>Your current outstanding balance is <b>₦${amountToPay}</b>, but with this settlement offer, you can clear your loan by paying <b>₦${discountAmountToPay}</b>.
            <br>
            We strongly advise you to take advantage of this offer immediately to avoid possible field visitation and further escalation steps.</p>

            <p>Please note that completing your settlement payment will:</p>
            <ul><li>Clear your name from the Credit Bureau blacklist</li>
            <li>Restore your creditworthiness</li>
            <li>Close your loan without additional charges</li></ul>

            <p>Kindly make the settlement payment today via your FairMoney app or through the payment details below:
            <br>Account Name: ____
            <br>Account Number: ____
            <br>Bank: ____</p>

            <p>We appreciate your prompt cooperation.</p>
            <p>Yours sincerely,
            <br>Recovery Team
            <br>FairMoney Microfinance Bank</p>`;

            document.getElementById('emailSubject').innerHTML = subject;
            document.getElementById('emailBody').innerHTML = body;
        }

        