import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Moumouton",
		en: "Wooloo"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Boul’Armure",
				en: "Defense Curl"
			},
			effect: {
				fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coup d’Boule",
				en: "Headbutt"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
