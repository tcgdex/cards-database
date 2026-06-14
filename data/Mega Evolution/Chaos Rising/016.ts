import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "The water they shoot from their mouths can hit moving prey from more than 300 feet away.",
	},


	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		es: "Remoraid",
		'es-mx': "Remoraid",
		de: "Remoraid",
		it: "Remoraid",
		pt: "Remoraid"
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
			en: "Sharp Fin",
			fr: "Aileron Aiguisé",
			es: "Cortaleta",
			'es-mx': "Aleta Afilada",
			de: "Schneidige Flosse",
			it: "Pinnaffilata",
			pt: "Barbatana Afiada"
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
	],
}

export default card
