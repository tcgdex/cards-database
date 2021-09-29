import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Yanma",
		fr: "Yanma",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		193,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Free Flight",
				fr: "Vol gratuit",
			},
			effect: {
				en: "If Yanma has no Energy attached to it, Yanma’s Retreat Cost is 0.",
				fr: "Si aucune carte Énergie n’est attachée à Yanma, son Coût de retraite est de 0.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its large eyes can scan 360 degrees. It looks in all directions to seek out insects as its prey."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
