import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Raikou ex",
		fr: "Raikou ex",
		de: "Raikou-ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [243],

	hp: 100,

	stage: "Basic",
	types: [
		"Lightning"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Explosion de lumière",
				de: "Blendende Explosion"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Tackle",
				fr: "Charge éclair",
				de: "Blitztackle"
			},
			effect: {
				en: "Flip a coin. If tails, Raikou ex does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Raikou ex s'inflige 20 dégâts.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt sich Raikou ex selbst 20 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88540,
				cardmarket: 276069
			}
		}
	]
}

export default card
