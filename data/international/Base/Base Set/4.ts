import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'de-de': "Glurak",
		'it-it': "Charizard"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'it-it': "Charmeleon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Energy Burn",
				'fr-fr': "Combustion d'Énergie",
				'de-de': "Energie verbrennen",
				'it-it': "Brucia energia"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez transformer toutes les Énergies attachées à Dracaufeu en Énergie  jusqu'à la fin du tour. Ce pouvoir ne peut être utilisé si Dracaufeu est Endormi, Confus ou Paralysé.",
				'de-de': "Bist Du am Zug, kannst Du (vor Deinem Angriff) beliebig oft alle auf Glurak abgelegte Energie in  Energie für den Rest des Zugs verwandeln. Diese Fähigkeit kann nicht eingesetzt werden, falls Glurak schlafend, verwirrt oder gelähmt ist.",
				'it-it': "Quante volte vuoi durante il tuo turno (prima di attaccare), puoi trasformare tutte le carte Energia assegnate a Charizard in carte Energia Fuoco per il resto del turno. Questo potere non può essere usato se Charizard è Addormentato, Confuso o Paralizzato."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme",
				'de-de': "Feuerwirbel",
				'it-it': "Turbofuoco"
			},
			effect: {
				'en-us': "Discard 2 Energy cards attached to Charizard in order to use this attack.",
				'fr-fr': "Défaussez 2 cartes Énergie attachées à Dracaufeu pour pouvoir utiliser cette attaque.",
				'de-de': "Entferne 2 auf Glurak abgelegte Energiekarten, um diesen Angriff auszuführen.",
				'it-it': "Scarta 2 carte Energia assegnate a Charizard per poter usare questo attacco."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.",
		'fr-fr': "Il peut fondre la roche de son souffle brûlant. Il est souvent la cause de nombreux incendies.",
		'it-it': "Sputa fiamme così intense da sciogliere le rocce. Senza volerlo, a volte causa incendi boschivi. LIV 76 N.6"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273699,
				tcgplayer: 42382
			},
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 106999
			},
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 106999
			},
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],

}

export default card
