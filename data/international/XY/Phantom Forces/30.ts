import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'es-es': "Heliolisk",
		'it-it': "Heliolisk",
		'pt-br': "Heliolisk",
		'de-de': "Elezard"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		695,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
		'de-de': "Eguana"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Pfund"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Parabolic Spark",
				'fr-fr': "Parabétincelle",
				'es-es': "Chispa Parabólica",
				'it-it': "Scintillaparabola",
				'pt-br': "Faísca Parabólica",
				'de-de': "Parabolfunken"
			},
			effect: {
				'en-us': "Discard as many Lightning Energy attached to your Pokémon as you like. This attack does 30 damage times the number of Energy cards you discarded.",
				'fr-fr': "Défaussez autant d'Énergies Lightning attachées à vos Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				'es-es': "Descarta tantas Energías Lightning unidas a tus Pokémon como quieras. Este ataque hace 30 puntos de daño por cada carta de Energía que hayas descartado.",
				'it-it': "Scarta a piacimento le Energie Lightning assegnate ai tuoi Pokémon. Questo attacco infligge 30 danni per ogni carta Energia che hai scartato.",
				'pt-br': "Descarte quantas Energias Lightning ligadas a seus Pokémon quanto desejar. Esse ataque causa 30 de danos vezes o número de cards de Energia descartados.",
				'de-de': "Lege beliebig viele an deine Pokémon angelegte Lightning-Energien auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They flare their frills and generate energy. A single Heliolisk can generate sufficient electricity to power a skyscraper.",
	},

	thirdParty: {
		cardmarket: 281835,
		tcgplayer: 94163
	}
}

export default card
