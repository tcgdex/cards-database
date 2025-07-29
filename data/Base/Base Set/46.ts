import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
		de: "Glumanda"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 50,

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
				de: "Glut"
			},
			effect: {
				en: "Discard 1 Energy card attached to Charmander in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Salamèche pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Glumanda abgelegte  Energiekarte, um diesen Angriff auszuführen."
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

	description: {
		fr: "Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour de sa queue."
	},

	thirdParty: {
		cardmarket: 273741
	}
}

export default card
