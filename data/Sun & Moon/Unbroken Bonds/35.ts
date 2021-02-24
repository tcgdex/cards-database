import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Blastoise-GX",
		fr: "Tortank-GX",
	},
	illustrator: "sadaji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 240,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
				fr: "Coquille Dure",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
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
				en: "Rocket Splash",
				fr: "Canon Éclaboussant",
			},
			effect: {
				en: "Shuffle any amount of Water Energy from your Pokémon into your deck. This attack does 60 damage for each card you shuffled into your deck in this way.",
				fr: "Mélangez autant d’Énergies Water que vous le voulez de vos Pokémon avec votre deck. Cette attaque inflige 60 dégâts pour chaque carte mélangée avec votre deck de cette façon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Giant Geyser-GX",
				fr: "Geyser Géant-GX",
			},
			effect: {
				en: "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
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
