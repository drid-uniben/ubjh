/* eslint-disable indent, max-len */
import { commonStyles, commonFooter } from './styles';

export const submissionConfirmationTemplate = (
    name: string,
    title: string,
    loginUrl: string,
    isRevision = false
): string => {
    let subject: string;
    if (isRevision) {
        subject = 'Manuscript Revision Confirmation';
    } else {
        subject = 'Manuscript Submission Confirmation';
    }

    let body: string;
    if (isRevision) {
        body = [
            '<p>Thank you for submitting your revised manuscript titled <strong class="highlight">"',
            title,
            '"</strong>.</p><p>Your revision has been received and is now under review.</p>',
        ].join('');
    } else {
        body = [
            '<p>Thank you for submitting your manuscript titled <strong class="highlight">"',
            title,
            '"</strong>.</p><p>Your submission has been received and is now under review by our committee.</p>',
        ].join('');
    }

    let loginInfo: string;
    if (isRevision) {
        loginInfo = [
            '<p>You can check the status of your submission by logging into your account: <a href="',
            loginUrl,
            '" class="button">Login</a></p>',
        ].join('');
    } else {
        loginInfo = '<p>You will receive subsequent updates via email too</p>';
    }

    return `
<html>
<head>
        <style type="text/css">
                ${commonStyles}
        </style>
</head>
<body>
        <div class="header">
                <h1>${subject}</h1>
        </div>

        <div class="content">
                <p>Dear ${name},</p>

                ${body}

                ${loginInfo}

                <p>We appreciate your contribution to the research community at the University of Benin. You will receive further communication regarding the status of your submission as soon as possible</p>
        </div>

        ${commonFooter}
</body>
</html>
`;
};
