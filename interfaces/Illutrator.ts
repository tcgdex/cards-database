import { Page } from "puppeteer-core"
import { promises as fs } from 'fs'

interface Illustrator {
	id: number
	name: string
}

const file = "./generated/illustrators.json"

let illustrators: Array<string> = []
namespace Illustrator {
	export async function fetchIllustrators(): Promise<void> {
		const illus = await fs.readFile(file)
		illustrators = JSON.parse(illus.toString())
	}

	export function processIllustrator(str: string): Illustrator {
		if (!illustrators.includes(str)) {
			illustrators.push(str)
		}

		return {
			id: illustrators.indexOf(str),
			name: str
		}

	}

	export async function getIllustrator(tab: Page): Promise<Illustrator> {
		const illustrator = await getIllustratorFromPage(tab)
		if (!illustrators.includes(illustrator)) {
			illustrators.push(illustrator)
		}

		return {
			id: illustrators.indexOf(illustrator),
			name: illustrator
		}
	}

	export function getIllustratorFromPage(tab: Page): Promise<string> {
		return tab.$eval("h4.highlight a", (el:HTMLElement) => {
			return el.innerText
		})
	}

	export function save(): Promise<void> {
		return fs.writeFile(file, JSON.stringify(illustrators))
	}
}

export default Illustrator
