import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		en: "Skitty",
		fr: "Lombre",
		es: "Lombre",
		it: "Lombre",
		pt: "Lombre",
		de: "Lombrero"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
		es: "Lotad",
		it: "Lotad",
		pt: "Lotad",
		de: "Loturzel"
	},

	weaknesses: [
		{
			type: "Fighting",
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle"
			},
			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lunge"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing."
			},
			damage: 30
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89263
			}
		},
	],

}

export default card