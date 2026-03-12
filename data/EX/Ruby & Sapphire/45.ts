import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool",
		de: "Bummelz"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Claw",
				fr: "Mâchoire",
				de: "Claw"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, l'attaque est sans effet.",
				de: "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slack Off",
				fr: "Paresse",
				de: "Slack Off"
			},
			effect: {
				en: "Remove all damage counters from Slakoth. Slakoth can't attack during your next turn.",
				fr: "Retirez à Paracool tous ses marqueurs de dégât. Paracool ne pourra pas attaquer pendant votre prochain tour.",
				de: "Remove all damage counters from Slakoth. Slakoth can't attack during your next turn."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275693,
		tcgplayer: 89295
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
