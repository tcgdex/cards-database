import { Page } from "puppeteer-core"

enum Category {
	POKEMON,
	TRAINER,
	ENERGY
}

const en = [
	"Pokémon",
	"Trainer",
	"Energy"
]

namespace Category {
	export function fromEnglish(str: string) {
		let i = en.indexOf(str)
		if (str === "Pok��mon") i = 1
		if (i < 0) throw new Error(`Cannot get the category (${str})`)
		return i
	}

	export function toLang(i: Category, lang: string) {
		switch (lang) {
			case "en":
				return en[i]
			default:
				break;
		}
	}
	export async function detect(tab: Page): Promise<Category> {
		const type = await tab.$eval(".card-basic-info .card-type h2", (el: HTMLElement) => {
			return el.innerText
		})
		if (
			type.startsWith("Dresseur") ||
			type.startsWith("Trainer") ||
			type.startsWith("Entrenador")
			) {
			return Category.TRAINER
		}
		if (
			type.startsWith("Énergie") ||
			type.endsWith("Energy") ||
			type.startsWith("Energía")
		) {
			return Category.ENERGY
		}
		try {
			await tab.$(".pokemon-stats .stat:nth-child(3)")
			return Category.POKEMON
		} catch {}
		console.log(tab.url())
		throw new Error("Pokemon Category not found !")
	}
}

export default Category
