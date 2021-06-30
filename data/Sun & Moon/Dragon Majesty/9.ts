import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		555,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Heat Assist",
				fr: "Assistance Fervente",
				es: "Asistencia de Calor",
				it: "Fuocaiuto",
				pt: "Assistência de Calor",
				de: "Hitzeförderung"
			},
			effect: {
				en: "Attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Attachez jusqu’à 3 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez.",
				es: "Une hasta 3 cartas de Energía Fire de tu mano a tus Pokémon de la manera que desees.",
				it: "Assegna a piacimento ai tuoi Pokémon fino a tre carte Energia Fire dalla tua mano.",
				pt: "Ligue até 3 cartas de Energia Fire da sua mão aos seus Pokémon como desejar.",
				de: "Lege bis zu 3 Fire-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Darmani-Hands",
				fr: "Daru-Mains",
				es: "Puños Darmanitas",
				it: "Darmani-Mani",
				pt: "Darmanimãos",
				de: "Flampivi-Hände"
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 more damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño más por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 50 pontos de dano a mais para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
