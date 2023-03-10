function greeter() {
    return `
        <html>
            <head>

                <style>
                    body {
                        background-color: cyan;
                        color: red;
                    }
                </style>
            </head>
            <body><h1>Hello, World!</h1></body>
        </html>
    `;
}

module.exports = greeter;
