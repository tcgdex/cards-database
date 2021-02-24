import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		313,
	],
	hp: 70,
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
				en: "Pheromone Catch",
				fr: "Prise de Phéromones",
			},
			effect: {
				en: "If your Illumise used Pheromone Signals during your last turn, this attack does 100 more damage.",
				fr: "Si votre Lumivole a utilisé Signaux de Phéromones pendant votre dernier tour, cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 20,

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
