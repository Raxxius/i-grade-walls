import Markdown from "react-markdown"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read content from landingpage.md in the app folder
const contentPath = path.join(__dirname, "landingpage.md")
const contentData = fs.readFileSync(contentPath, "utf8")

export default function Home() {
  return (
    <div className="prose max-w-prose text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center min-h-screen">
      <Markdown>
        {contentData}
      </Markdown>
    </div>
  );
}
