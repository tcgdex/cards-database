import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Aggron",
		fr: "Galeking de la Team Magma",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Team Magma's Lairon",
		fr: "Galegon de la Team Magma",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rock Stomp",
				fr: "Écras'Roc",
			},
			effect: {
				en: "Discard as many Fighting Energy attached to your Pokémon as you like. This attack does 40 damage times the amount of Fighting Energy you discarded.",
				fr: "Défaussez autant d'Énergies Fighting attachées à vos Pokémon que vous voulez. Cette attaque inflige 40 dégâts multipliés par le nombre de cartes Énergie Fighting que vous avez défaussées.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Boulder Storm",
				fr: "Tempête de Roche",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
