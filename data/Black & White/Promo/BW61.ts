import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Keldeo-EX",
		fr: "Keldeo ex",
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
				en: "Rush In",
				fr: "Intervention",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch this Pokémon with your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez échanger ce Pokémon avec votre Pokémon Actif.",
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
				en: "Secret Sword",
				fr: "Lame Ointe",
			},
			effect: {
				en: "Does 20 more damage for each Water Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
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
