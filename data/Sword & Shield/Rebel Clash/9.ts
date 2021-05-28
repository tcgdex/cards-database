import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spirited Rushdown",
				fr: "Ruée Impétueuse"
			},
			effect: {
				en: "This attack does 60 damage for each Prize card you have taken.",
				fr: "Cette attaque inflige 60 dégâts pour chaque carte Récompense que vous avez récupérée."
			},
			damage: "60×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Drain",
				fr: "Méga-Sangsue"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 160,
	types: ["Grass"],
	regulationMark: "D"
}

export default card
