import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Mightyena",
		fr: "Grahyèna"
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyèna"
	},



	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Ferocious Bellow",
				fr: "Grognement Féroce"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s attacks do 50 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance)."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pitch-Black Fangs",
				fr: "Crocs Nuit Noire"
			},

			damage: 100,

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
