import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		fr: "Arceus",
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 90,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Barrière métallique",
			},
			effect: {
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Arceus par des Pokémon NIV.X lors du prochain tour de votre adversaire.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83600
			}
		}
	]
}

export default card
