import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "It's nature's cleaner-it eats anything and everything, including garbage and rotten things. The ground near its nest is always clean.",
	},


	name: {
		en: "Wimpod",
		fr: "Sovkipou",
		es: "Wimpod",
		'es-mx': "Wimpod",
		de: "Reißlaus",
		it: "Wimpod",
		pt: "Wimpod"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			'es-mx': "Mordisquear",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída"
		},

		cost: ["Water"],
		damage: 10
	}, {
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			'es-mx': "Puño Sacacorchos",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha"
		},

		cost: ["Colorless", "Colorless"],
		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886417,
				tcgplayer: 693562
			}
		},
	],
}

export default card
