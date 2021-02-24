import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		27,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Defense Curl",
				fr: "Boul’Armure",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball’Glace",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
