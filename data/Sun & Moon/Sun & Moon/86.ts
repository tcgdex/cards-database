import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		50,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Spelunk",
				fr: "Spéléologue",
			},
			effect: {
				en: "Look at the top 3 cards of your deck and put them back in any order.",
				fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud’Boue",
			},

			damage: 10,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
