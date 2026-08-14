import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Shaymin-EX",
		fr: "Shaymin-EX",
		es: "Shaymin-EX",
		it: "Shaymin-EX",
		pt: "Shaymin-EX",
		de: "Shaymin-EX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 110,
	types: [
		"Grass",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Synthesis",
				fr: "Synthèse",
				de: "Synthese"
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Grass dans votre deck et attachez-la à 1 de vos Pokémon. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 {G}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Revenge Blast",
				fr: "Explo-Vengeance",
				de: "Rachestoß"
			},
			effect: {
				en: "Does 30 more damage for each Prize card your opponent has taken.",
				fr: "Inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Preiskarte zu, die dein Gegner bereits genommen hat."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
