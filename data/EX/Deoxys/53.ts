import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto",
		de: "Puppance"
	},

	illustrator: "Kenkichi Toyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
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
				en: "Spinning Attack",
				fr: "Attaque tournante",
				de: "Spinning Attack"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Fighting",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction",
				de: "Seldestruct"
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Baltoy does 50 damage to itself.",
				fr: "Inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Balbuto s'inflige 50 dégâts.",
				de: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Baltoy does 50 damage to itself."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 83712,
		cardmarket: 276456
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
