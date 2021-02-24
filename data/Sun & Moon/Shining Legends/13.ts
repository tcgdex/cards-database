import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},
	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		637,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heat Cyclone",
				fr: "Cyclone de Chaleur",
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
