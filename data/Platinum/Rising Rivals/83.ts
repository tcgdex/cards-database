import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari Niv. 18",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		120,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cosmic Draw",
				fr: "Pioche cosmik",
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, draw 3 cards.",
				fr: "Si votre adversaire possède des Pokémon Évolués en jeu, piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Swift",
				fr: "Météores",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
