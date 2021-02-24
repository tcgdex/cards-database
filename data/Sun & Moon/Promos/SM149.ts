import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Frozen Flow",
				fr: "Flot Gelé",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Gain",
				fr: "Puissance Boréale",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
