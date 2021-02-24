import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Farewell Letter",
				fr: "Lettre d'Adieu",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard this Pokémon and all cards attached to it (this does not count as a Knock Out). If you do, draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser ce Pokémon et toutes les cartes qui lui sont attachées (cela n'équivaut pas à un K.O.). Dans ce cas, piochez une carte.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance Cachée",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
