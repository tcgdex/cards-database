import { Page } from "puppeteer-core"

enum Rarity {
	Common,
	Uncommon,
	Rare,

	// Rare holo
	RareHolo,
	RareHoloEX,
	RareHoloGX,
	RareHoloLvX,

	// Rare other
	RareUltra,
	RarePrime,
	RareACE,
	RareBREAK,
	RareRainbow,

	// Other
	LEGEND,
}

namespace Rarity {

	export async function getRarity(tab: Page): Promise<Rarity> {
		const rarity = await tab.$eval(".stats-footer span", (el: HTMLElement) => {
			const arr = el.innerText.split(" ")
			arr.shift()
			return arr.join(" ")
		})
		return getLocalRarity(rarity)
	}

	export function getLocalRarity(str?: string): Rarity {
		switch (str) {
			// Handle common Rarity errors
			case undefined:
			case "":
				console.warn(`Rarity is (${str}) returning Common`)
			case "Common":
				return Rarity.Common
			case "Uncommon":
				return Rarity.Uncommon

			// Rare
			case "Rare":
			case "Rare Secret":
			case "Rare Promo":
			case "Shining":
				return Rarity.Rare

			// Rare Holo
			case "Rare Holo":
				return Rarity.RareHolo
			case "Rare Holo EX":
				return Rarity.RareHoloEX
			case "Rare Holo GX":
				return Rarity.RareHoloGX
			case "Rare Holo Lv.X":
				return Rarity.RareHoloLvX

			// Rare Other
			case "Rare Ultra":
				return Rarity.RareUltra
			case "Rare Prime":
				return Rarity.RarePrime
			case "Rare ACE":
				return Rarity.RareACE
			case "Rare BREAK":
				return Rarity.RareBREAK
			case "Rainbow Rare":
			case "Rare Rainbow":
				return Rarity.RareRainbow

			// LEGEND
			case "LEGEND":
				return Rarity.LEGEND
			default:
				throw new Error(`Rarity not known (${str})`)
		}
	}
}

export default Rarity
