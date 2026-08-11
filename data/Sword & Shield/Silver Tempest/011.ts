import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [590],
	set: Set,

	name: {
		en: "Foongus",
		fr: "Trompignon",
		es: "Foongus",
		it: "Foongus",
		pt: "Foongus",
		de: "Tarnpignon"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "No one knows what the Poké Ball–like pattern on Foongus means or why Foongus has it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682052,
				tcgplayer: 451632
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682052,
				tcgplayer: 451632
			}
		},
	],
}

export default card
