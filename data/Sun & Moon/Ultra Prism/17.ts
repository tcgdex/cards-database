import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		752,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Water Bubble",
				fr: "Aquabulle",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Edge",
				fr: "Aqua-Dague",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
