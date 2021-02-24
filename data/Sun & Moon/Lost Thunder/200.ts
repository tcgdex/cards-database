import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Suicune-GX",
		fr: "Suicune-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Phantom Winds",
				fr: "Vent Spectral",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may shuffle it and all cards attached to it into your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez le mélanger, ainsi que toutes les cartes qui lui sont attachées, avec votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Cure Stream",
				fr: "Ruisseau Guérisseur",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 120,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Brinicles-GX",
				fr: "Brinicles-GX",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

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
