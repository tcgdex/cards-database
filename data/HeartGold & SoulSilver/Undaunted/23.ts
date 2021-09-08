import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		416,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Defense Sign",
				fr: "Signal de défense",
			},
			effect: {
				en: "Prevent all damage done to your Benched Grass Pokémon by attacks.",
				fr: "Prévenez tous les dégâts infligés par des attaques aux Pokémon Grass de votre Banc.",
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
				en: "Mach Wind",
				fr: "Vent frénétique",
			},
			effect: {
				en: "During your next turn, Vespiquen’s Retreat Cost is 0.",
				fr: "Pendant votre prochain tour, le Coût de retraite d’Apireine est de 0.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
