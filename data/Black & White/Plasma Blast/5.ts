import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		357,
	],
	hp: 100,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Return",
				fr: "Retour",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Press",
				fr: "Pression Énergétique",
			},
			effect: {
				en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
