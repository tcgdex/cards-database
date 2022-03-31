import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		pt: "Heliolisk",
		de: "Elezard"
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
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		it: "Helioptile",
		pt: "Helioptile",
		de: "Eguana"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
				es: "Destructor",
				it: "Botta",
				pt: "Pancada",
				de: "Pfund"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Parabolic Spark",
				fr: "Parabétincelle",
				es: "Chispa Parabólica",
				it: "Scintillaparabola",
				pt: "Faísca Parabólica",
				de: "Parabolfunken"
			},
			effect: {
				en: "Discard as many Lightning Energy attached to your Pokémon as you like. This attack does 30 damage times the number of Energy cards you discarded.",
				fr: "Défaussez autant d'Énergies Lightning attachées à vos Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				es: "Descarta tantas Energías Lightning unidas a tus Pokémon como quieras. Este ataque hace 30 puntos de daño por cada carta de Energía que hayas descartado.",
				it: "Scarta a piacimento le Energie Lightning assegnate ai tuoi Pokémon. Questo attacco infligge 30 danni per ogni carta Energia che hai scartato.",
				pt: "Descarte quantas Energias Lightning ligadas a seus Pokémon quanto desejar. Esse ataque causa 30 de danos vezes o número de cards de Energia descartados.",
				de: "Lege beliebig viele an deine Pokémon angelegte Lightning-Energien auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
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



}

export default card
