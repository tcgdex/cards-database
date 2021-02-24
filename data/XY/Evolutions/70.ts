import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		113,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scrunch",
				fr: "Compresse",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
			},
			effect: {
				en: "This Pokémon does 80 damage to itself.",
				fr: "Ce Pokémon s’inflige 80 dégâts.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
