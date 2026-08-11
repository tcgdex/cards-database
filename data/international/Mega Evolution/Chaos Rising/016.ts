import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "The water they shoot from their mouths can hit moving prey from more than 300 feet away.",
	},


	name: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'es-mx': "Remoraid",
		'de-de': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid"
	},

	illustrator: "Mori Yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [223],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sharp Fin",
			'fr-fr': "Aileron Aiguisé",
			'es-es': "Cortaleta",
			'es-mx': "Aleta Afilada",
			'de-de': "Schneidige Flosse",
			'it-it': "Pinnaffilata",
			'pt-br': "Barbatana Afiada"
		},

		cost: ["Water"],
		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886408,
				tcgplayer: 693539
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886408,
				tcgplayer: 693539
			}
		},
	],
}

export default card
