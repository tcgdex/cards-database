import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 100,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Wing",
				fr: "Aile de Fer",
				es: "Ala Férrea",
				it: "Alaferro",
				pt: "Asa de Ferro",
				de: "Eisenflügel"
			},
			effect: {
				en: "Discard a Metal Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Metal attachée à ce Pokémon.",
				es: "Descarta 1 Energía Metal unida a este Pokémon.",
				it: "Scarta un'Energia Metal assegnata a questo Pokémon.",
				pt: "Descarte uma Energia Metal ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Metal-Energie auf deinen Ablagestapel."
			},
			damage: 90,

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



}

export default card
