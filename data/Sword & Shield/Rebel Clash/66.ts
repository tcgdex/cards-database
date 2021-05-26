import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Vikavolt",
		fr: "Lucanon"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile"
	},

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Storm",
				fr: "Tempête Puissante"
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon."
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt Beam",
				fr: "Secousse Tonnerre Lumineuse"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 150,
	types: ["Lightning"]
}

export default card
