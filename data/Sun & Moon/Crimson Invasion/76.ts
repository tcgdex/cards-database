import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		783,
	],
	hp: 90,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Noble Roar",
				fr: "Râle Mâle",
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Lightning",
				"Fightning",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
