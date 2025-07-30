import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Basic Lightning Energy",
		fr: "Énergie Lightning de base",
		es: "Energía Lightning Básica",
		it: "Energia base Lightning",
		pt: "Energia Lightning Básica",
		de: "Basis-Lightning-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	energyType: "Normal",
	types: ["Lightning"],

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 702553
	}
}

export default card
