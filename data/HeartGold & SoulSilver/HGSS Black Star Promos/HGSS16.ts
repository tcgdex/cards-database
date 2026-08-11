import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi"
	},
	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [311],
	hp: 60,
	types: [
		"Lightning"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse tonnerre"
			},
			effect: {
				en: "Flip a coin. If tails, Plusle does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Posipi s'inflige 10 dégâts."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		en: "It absorbs electricity from telephone poles. It shorts out its body to create crackling noises."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275597,
				tcgplayer: 88172
			}
		},
	],

}

export default card
