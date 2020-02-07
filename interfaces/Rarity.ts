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

	// V & Vmax
	RareV,
	RareVMAX,
}

const en = [
	"Common",
	"unCommon",
	"Rare",

	"Rare Holo",
	"Rare Holo EX",
	"Rare Holo GX",
	"Rare Holo Lv.X",

	"Rare Ultra",
	"Rare Prime",
	"Rare ACE",
	"Rare BREAK",
	"Rainbow Rare",

	"LEGEND"
]

const fr = [
	"Commun",
	"Non Commun",
	"Rare",

	"Rare Holo",
	"Rare Holo EX",
	"Rare Holo GX",
	"Rare Holo Lv.X",

	"Rare Ultra",
	"Rare Prime",
	"Rare ACE",
	"Rare BREAK",
	"Rainbow Rare",

	"LEGEND"
]

namespace Rarity {

	export function toLang(r: Rarity, lang: string): string {
		switch (lang) {
			case "en":
				return en[r]
			case "fr":
				return fr[r]
		}
		throw new Error(`Error, rarity lang not found! (${lang})`)
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

			case "V":
				return Rarity.RareV

			case "VM":
				return Rarity.RareVMAX
			default:
				throw new Error(`Rarity not known (${str})`)
		}
	}
}

export default Rarity
