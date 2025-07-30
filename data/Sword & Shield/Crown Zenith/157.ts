import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Fighting Energy",
		fr: "Énergie Combat",
		es: "Energía Lucha",
		it: "Energia Combattimento",
		pt: "Energia de Luta",
		de: "Kampf-Energie"
	},

	rarity: "Ultra Rare",
	category: "Energy",
	energyType: "Normal",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691876,
		tcgplayer: 478109
	}
}

export default card