import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Triopikeur",
		de: "Digdri"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [145],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Anti-Lightning",
			},
			effect: {
				en: "You can't attach Lightning Energy cards from your hand to Zapdos.",
			},
		},
	],,
	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Plasma",
				fr: "Coud'boue",
				de: "Mud Slap"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Storm",
				fr: "Ampleur",
				de: "Magnitude"
			},
			effect: {
				en: "Flip a coin. If tails, put 2 damage counters on Zapdos.",
				fr: "Inflige 10 dégâts à chaque Pokémon du Banc (le vôtre et celui de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84998,
				cardmarket: 274885
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
