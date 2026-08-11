import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'de-de': "Traunmagil"
	},

	illustrator: "Midori Harada",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		429,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Crash Chant",
				'fr-fr': "Chant fracassant",
				'de-de': "Absturzgesang"
			},
			effect: {
				'en-us': "Choose up to 4 in any combination of Pokémon Tool cards and Technical Machine cards in play (both yours and your opponent's) and discard them. This attack does 20 damage times the number of cards discarded in this way.",
				'fr-fr': "Choisissez n'importe quelle combinaison de jusqu'à 4 cartes Outil Pokémon et cartes Machine Technique en jeu (les vôtres et celles de votre adversaire) et défaussez-les. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes défaussées de cette façon.",
				'de-de': "Wähle bis zu 4 Karten in beliebiger Kombination aus Pokémon-, Ausrüstungs- und Technische Maschine-Karten im Spiel (deine und die deines Gegners) und lege sie auf den Ablagestapel. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der auf diese Weise auf den Ablagestapel gelegten Karten zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Horror Chant",
				'fr-fr': "Chant d'horreur",
				'de-de': "Schreckenszauber"
			},
			effect: {
				'en-us': "If your opponent has 4 or more Benched Pokémon, choose 1 of them and return that Pokémon and all cards attached to it to your opponent's hand.",
				'fr-fr': "Si votre adversaire possède au moins 4 Pokémon de Banc, choisissez-en 1 et replacez-le ainsi que toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
				'de-de': "Wenn dein Gegner 4 oder mehr Pokémon auf seiner Bank hat, wähle 1 davon. Dein Gegner nimmt das gewählte Pokémon und alle daran angelegten Karten auf seine Hand zurück."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278305,
		tcgplayer: 87515
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
