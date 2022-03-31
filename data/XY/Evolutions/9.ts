import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		4,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				es: "Ascuas",
				it: "Braciere",
				pt: "Brasa",
				de: "Glut"
			},
			effect: {
				en: "Discard a Fire Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
				es: "Descarta 1 Energía Fire unida a este Pokémon.",
				it: "Scarta un'Energia Fire assegnata a questo Pokémon.",
				pt: "Descarte uma Energia Fire ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
