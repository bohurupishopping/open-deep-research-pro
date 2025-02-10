# Open Deep Research Web UI

A modern, interactive web interface built on top of the original [Deep Research CLI](https://github.com/dzhng/deep-research) project. This web app transforms the command-line research assistant into an intuitive, visually appealing experience using Next.js and shadcn/ui.

## Overview
This fork of Open Deep Research by Anotherwrapper elevates the research experience by integrating the cutting-edge Tavily API. Tavily delivers state-of-the-art search capabilities that provide highly accurate and comprehensive results, transforming conventional research into an innovative and impactful process.

Open Deep Research Web UI harnesses advanced artificial intelligence by combining enhanced search engines (via Tavily), robust web scraping, and powerful language models (via OpenAI) to deliver an unparalleled research assistant. Enjoy a seamless experience with real-time progress tracking, detailed markdown reports, and actionable insights at your fingertips.

## Key Features

- **Intelligent Research Process:**
  - Performs iterative research by recursively exploring topics in depth.
  - Utilizes LLMs to generate targeted search queries based on research goals.
  - Creates follow-up questions to refine and focus research objectives.
  - Processes multiple searches and results concurrently for enhanced efficiency.
  - Configurable depth and breadth parameters to tailor research scope.
  - **Enhanced Search Accuracy:** Leverages the Tavily API for precise and enriched search results.

- **Research Output:**
  - Generates detailed markdown reports complete with findings and sources.
  - Provides real-time progress tracking of ongoing research tasks.
  - Features a built-in markdown viewer for easy review of results.
  - Allows for downloadable research reports for offline use.

- **Modern Interface:**
  - Interactive controls for adjusting research parameters seamlessly.
  - Visual feedback for tracking research progress in real time.
  - Secure HTTP-only cookie storage for managing API keys.

## Getting Started

### Prerequisites

- Node.js v14 or later
- API keys for OpenAI and Tavily

### Installation

1. **Clone and Install**

   ```bash
   git clone https://github.com/bohurupishopping/open-deep-research-pro
   cd open-deep-research
   npm install
   ```

2. **Configure Environment**

   Create a `.env.local` file and add:

   ```bash
   OPENAI_API_KEY=your-openai-api-key
   TAVILY_API_KEY=tavily-api-key
   NEXT_PUBLIC_ENABLE_API_KEYS=false  # Set to false to disable the API key dialog
   ```

3. **Run the App**

   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)

## API Key Management

By default (`NEXT_PUBLIC_ENABLE_API_KEYS=true`), the app includes an API key input dialog that allows users to try out the research assistant directly in their browser using their own API keys. Keys are stored securely in HTTP-only cookies and are never exposed to client-side JavaScript.

For your own deployment, you can disable this dialog by setting `NEXT_PUBLIC_ENABLE_API_KEYS=false` and managing API keys directly in your `.env.local` file.

## License

MIT License. Feel free to use and modify the code for your own projects.

## Acknowledgements

- **Original CLI:** [fdarkaou/open-deep-research](https://github.com/fdarkaou/open-deep-research)
- **Tools:** Next.js, shadcn/ui, Vercel AI SDK, Tavily API, and OpenAI

Happy researching!
