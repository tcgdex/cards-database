import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Makuhita",
		fr: "Makuhita",
		de: "Makuhita"
	},

	illustrator: "Asuka Iwashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		296,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thrust",
				fr: "Coup d'pouce",
				de: "Thrust"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, discard 1 Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est pile. Cette attaque est sans effet. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Flip a coin. If tails, this attack does nothing. If heads, discard 1 Energy card attached to the Defending Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte secrète",
				de: "Rising Lunge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 87128,
		cardmarket: 276468
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
