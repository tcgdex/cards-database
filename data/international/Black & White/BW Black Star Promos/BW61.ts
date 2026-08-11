import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Keldeo-EX",
		'fr-fr': "Keldeo ex",
	},
	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 170,
	types: [
		"Water",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Rush In",
				'fr-fr': "Intervention",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch this Pokémon with your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez échanger ce Pokémon avec votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Secret Sword",
				'fr-fr': "Lame Ointe",
			},
			effect: {
				'en-us': "Does 20 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
