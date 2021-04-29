import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		fr: "Tortank-GX",
	},
	illustrator: "sadaji",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 240,
	types: [
		"Water",
	],
	evolveFrom: {
		fr: "Carabaffe",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Coquille Dure",
			},
			effect: {
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				fr: "Canon Éclaboussant",
			},
			effect: {
				fr: "Mélangez autant d’Énergies Water que vous le voulez de vos Pokémon avec votre deck. Cette attaque inflige 60 dégâts pour chaque carte mélangée avec votre deck de cette façon.",
			},
			damage: "60×",

		},
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Geyser Géant-GX",
			},
			effect: {
				fr: "Attachez autant de cartes Énergie Water que vous le voulez de votre main à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
