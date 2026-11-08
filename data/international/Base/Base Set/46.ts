import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'de-de': "Glumanda",
		'it-it': "Charmander"
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
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer",
				'it-it': "Graffio"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'de-de': "Glut",
				'it-it': "Braciere"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Charmander in order to use this attack.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Salamèche pour pouvoir utiliser cette attaque.",
				'de-de': "Entferne eine auf Glumanda abgelegte  Energiekarte, um diesen Angriff auszuführen.",
				'it-it': "Scarta una carta Energia Fuoco assegnata a Charmander per poter usare questo attacco.",
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


	description: {
		'en-us': "Obviously prefers hot places. If it gets caught in the rain, steam is said to spout from the tip of its tail.",
		'fr-fr': "Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour de sa queue.",
		'it-it': "Ovviamente preferisce luoghi molto caldi. Se gli capita di trovarsi sotto la pioggia, si dice che esca vapore dalla punta della sua coda."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273741,
				tcgplayer: 42389
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107043
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107043
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
