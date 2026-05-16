import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		en: "Rellor",
		fr: "Léboulérou",
		es: "Rellor",
		it: "Rellor",
		pt: "Rellor",
		de: "Relluk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
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
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794268,
				tcgplayer: 590035
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794268,
				tcgplayer: 590035
			}
		},
	],

	illustrator: "Toshinao Aoki",
	
}

export default card
