import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
		es: "Turtwig",
		it: "Turtwig",
		pt: "Turtwig",
		de: "Chelast"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 70,

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
				en: "Nap",
				fr: "Tit'Sieste",
				de: "Nickerchen"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				de: "Rasierblatt"
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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "The shell on its back is made of soil. On a very healthy Turtwig, the shell should feel moist.",
		de: "Der Panzer auf seinem Rücken besteht aus Erdreich. Bei gesunden Chelast ist der Panzer feucht."
	},

	thirdParty: {
		cardmarket: 280741,
		tcgplayer: 90081
	}
}

export default card
