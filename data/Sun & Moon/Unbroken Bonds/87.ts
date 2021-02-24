import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Geodude",
		fr: "Racaillou",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		74,
	],
	hp: 70,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
			},

			damage: 40,

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
