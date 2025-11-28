import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Basic Fighting Energy",
		fr: "Énergie Fighting de base",
		es: "Energía Fighting Básica",
		it: "Energia base Fighting",
		pt: "Energia Fighting Básica",
		de: "Basis-Fighting-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	energyType: "Normal",
	types: ["Fighting"],

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
        cardmarket: 702554,
        tcgplayer: 490294
    }
}

export default card
