import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<>
				<Html>
					<Head>
						<link rel="preconnect" href="https://fonts.gstatic.com" />
						<link
							href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
							rel="stylesheet"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&display=swap"
							rel="stylesheet"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Mulish:ital@0;1&display=swap"
							rel="stylesheet"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Norican&display=swap"
							rel="stylesheet"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
							rel="stylesheet"
						/>
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</>
		);
	}
}

export default MyDocument;
