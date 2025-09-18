import highlight from 'highlight.js/styles/github.css?url';
import type { LinksFunction } from 'react-router';
import {
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	// ScrollRestoration,
} from 'react-router';
import stylesheet from '~/tailwind.css?url';
import studyMaterialsStyles from '~/styles/study-materials.css?url';
import { StatsBar } from '~/components/StatsBar';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
	{ rel: 'stylesheet', href: highlight },
	{ rel: 'stylesheet', href: studyMaterialsStyles },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
				<div className="min-h-screen">
					<div className="mx-auto max-w-4xl px-4 py-6">
						<header className="mb-8 text-center">
							<Link to="/" className="group inline-flex items-center gap-4 no-underline">
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg transition-all group-hover:scale-105">
									<img
										src="/favicon-32x32.png"
										alt="AZ-204"
										className="h-8 w-8"
									/>
								</div>
								<div className="text-left">
									<h1 className="text-4xl font-bold text-indigo-900 group-hover:text-indigo-700 transition-colors">
										AZ-204 Quiz
									</h1>
									<p className="text-sm text-gray-600 font-medium">
										Developing Solutions for Microsoft Azure
									</p>
								</div>
							</Link>
						</header>
						
						<StatsBar />
						
						<main className="rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden">
							<div className="p-8">
								<Outlet />
							</div>
						</main>
						
						<footer className="mt-8 text-center">
							<div className="flex items-center justify-center gap-4 text-sm text-gray-500">
								<span>Exam revision: April 11, 2025</span>
								<span>•</span>
								<a
									href="https://github.com/arvigeus/AZ-204"
									target="_blank"
									title="View on GitHub"
									rel="noreferrer"
									className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition-colors"
								>
									<svg
										role="img"
										aria-label="GitHub"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									GitHub
								</a>
							</div>
						</footer>
					</div>
				</div>
				<Scripts />
			</body>
		</html>
	);
}
