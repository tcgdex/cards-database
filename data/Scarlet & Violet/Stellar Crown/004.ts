import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Celebi",
		fr: "Celebi",
		es: "Celebi",
		it: "Celebi",
		pt: "Celebi",
		de: "Celebi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			es: "Paso Hoja",
			it: "Passofoglia",
			pt: "Passo de Folha",
			de: "Blattschritt"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "satoma",

	thirdParty: {
		cardmarket: 785857
	}
}

export default card
