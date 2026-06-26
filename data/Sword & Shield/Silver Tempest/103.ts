import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		en: "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682150,
				tcgplayer: 451757
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682150,
				tcgplayer: 451757
			}
		},
	],
}

export default card
