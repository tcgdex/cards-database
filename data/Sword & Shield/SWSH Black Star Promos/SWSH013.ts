import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Ponyta de Galar",
		en: "Galarian Ponyta",
		es: "Ponyta de Galar",
		it: "Ponyta di Galar",
		pt: "Galarian Ponyta",
		de: "Galar-Ponita"
	},

	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Vibra Soin",
				en: "Heal Pulse",
				es: "Pulso Cura",
				it: "Ondasana",
				pt: "Heal Pulse",
				de: "Heilwoge"
			},
			effect: {
				fr: "Soignez 30 dégâts de l’un de vos Pokémon.",
				en: "Heal 30 damage from 1 of your Pokémon.",
				es: "Cura 30 puntos de daño a 1 de tus Pokémon.",
				it: "Cura uno dei tuoi Pokémon da 30 danni.",
				pt: "Heal 30 damage from 1 of your Pokémon.",
				de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Flop",
				en: "Flop",
				es: "Vuelta",
				it: "Tonfo",
				pt: "Flop",
				de: "Plumps"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	description: {
		en: "Its small horn hides a healing power. With a few rubs from this Pokémon’s horn, any slight wound you have will be healed."
	},

	dexId: [77],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
