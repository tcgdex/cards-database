import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
		de: "Glumanda",
		it: "Charmander"
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
				de: "Kratzer",
				it: "Graffio"
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
				de: "Glut",
				it: "Braciere"
			},
			effect: {
				en: "Discard 1 Energy card attached to Charmander in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Salamèche pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Glumanda abgelegte  Energiekarte, um diesen Angriff auszuführen.",
				it: "Scarta una carta Energia Fuoco assegnata a Charmander per poter usare questo attacco.",
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
		fr: "Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour de sa queue.",
		it: "Ovviamente preferisce luoghi molto caldi. Se gli capita di trovarsi sotto la pioggia, si dice che esca vapore dalla punta della sua coda."
	},

	thirdParty: {
		cardmarket: 273741,
		tcgplayer: 42389
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/014.ts"
		}
	]
}

export default card
