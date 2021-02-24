import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		553,
	],
	hp: 150,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "False Accusation",
				fr: "Fausse Accusation",
			},
			effect: {
				en: "This attack does 20 more damage for each card in your opponent's hand.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Obsidian Fang",
				fr: "Croc d'Obsidienne",
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards from your opponent's Active Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
