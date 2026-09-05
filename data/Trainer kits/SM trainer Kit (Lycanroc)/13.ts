import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [662],
	set: Set,

	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flap",
				de: "Flattern"
			},
			damage: 20
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wind",
				de: "Klingensturm"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 40
		},
	],
	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297244,
				tcgplayer: 152833
			}
		},
	],

}

export default card