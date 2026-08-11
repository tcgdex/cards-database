import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo",
		'it-it': "Charmeleon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'it-it': "Charmander"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer",
				'it-it': "Lacerazione"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flammenwurf",
				'it-it': "Lanciafiamme"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Charmeleon in order to use this attack.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Reptincel pour pouvoir utiliser cette attaque.",
				'de-de': "Entferne eine auf Glutexo abgelegte  Energiekarte, um diesen Angriff auszuführen.",
				'it-it': "Scarta una carta Energia Fuoco assegnata a Charmeleon per poter usare questo attacco."
			},
			damage: 50,

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273719,
				tcgplayer: 42365
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107021
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107021
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When it swings its burning tail, it raises the temperature to unbearably high levels.",
		'fr-fr': "En agitant sa queue, il peut élever le niveau de la température à un degré incroyable.",
		'it-it': "Quando rotea la coda incandescente, aumenta la temperatura a livelli insopportabilmente alti. LIV 32 N.5"
	},
}

export default card
