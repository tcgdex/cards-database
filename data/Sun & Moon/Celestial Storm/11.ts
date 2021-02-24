import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Seedot",
		fr: "Grainipiot",
	},
	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		273,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hang Down",
				fr: "Suspension",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Harden",
				fr: "Armure",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques dont le montant des dégâts est de 40 ou moins.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
