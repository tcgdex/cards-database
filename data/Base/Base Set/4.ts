import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak",
		it: "Charizard"
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
		en: "Charmeleon",
		it: "Charmeleon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Energy Burn",
				fr: "Combustion d'Énergie",
				de: "Energie verbrennen",
				it: "Brucia energia"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez transformer toutes les Énergies attachées à Dracaufeu en Énergie  jusqu'à la fin du tour. Ce pouvoir ne peut être utilisé si Dracaufeu est Endormi, Confus ou Paralysé.",
				de: "Bist Du am Zug, kannst Du (vor Deinem Angriff) beliebig oft alle auf Glurak abgelegte Energie in  Energie für den Rest des Zugs verwandeln. Diese Fähigkeit kann nicht eingesetzt werden, falls Glurak schlafend, verwirrt oder gelähmt ist.",
				it: "Quante volte vuoi durante il tuo turno (prima di attaccare), puoi trasformare tutte le carte Energia assegnate a Charizard in carte Energia Fuoco per il resto del turno. Questo potere non può essere usato se Charizard è Addormentato, Confuso o Paralizzato."
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
				en: "Fire Spin",
				fr: "Danseflamme",
				de: "Feuerwirbel",
				it: "Turbofuoco"
			},
			effect: {
				en: "Discard 2 Energy cards attached to Charizard in order to use this attack.",
				fr: "Défaussez 2 cartes Énergie attachées à Dracaufeu pour pouvoir utiliser cette attaque.",
				de: "Entferne 2 auf Glurak abgelegte Energiekarten, um diesen Angriff auszuführen.",
				it: "Scarta 2 carte Energia assegnate a Charizard per poter usare questo attacco."
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
		fr: "Il peut fondre la roche de son souffle brûlant. Il est souvent la cause de nombreux incendies.",
		it: "Sputa fiamme così intense da sciogliere le rocce. Senza volerlo, a volte causa incendi boschivi. LIV 76 N.6"
	},

	thirdParty: {
		cardmarket: 273699,
		tcgplayer: 42382
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],

}

export default card
