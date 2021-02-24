import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		fr: "Amphinobi-GX",
	},
	illustrator: "MPC Film",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 230,
	types: [
		"Water",
	],
	evolveFrom: {
		fr: "Croâporal",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Maître Évasif",
			},
			effect: {
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre dernière carte en main, vous pouvez le placer sur votre Banc. Dans ce cas, piochez 3 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Tranche-Brume",
			},
			effect: {
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Brume Obscure-GX",
			},
			effect: {
				fr: "Placez l’un des Pokémon de Banc de votre adversaire et toutes les cartes qui lui sont attachées dans la main de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
