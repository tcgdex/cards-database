import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Clefable",
		'fr-fr': "Melodelfe",
		'de-de': "Pixi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Clefairy",
		'fr-fr': "Melofée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Slap",
				'fr-fr': "Torgnoles",
				'de-de': "Duplexhieb"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Müntzen. Dieser Angrif fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metronome",
				'fr-fr': "Métronome",
				'de-de': "Metronom"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) Clefable performs that attack.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Métronome copie cette attaque, son Coût en Énergie excepté. (Vous devez toujours faire ce que l'attaque indique.) Melodelfe utilise cette attaque.",
				'de-de': "Wähle 1 Angriff des Verteidigenden Pokémon. Metronom kopiert diesen Angriff, mit Ausnahme der Energiekosten. (Du musst immer noch alles zun, was verlangt wird, um diesen Angriff durchzuführen). Pixi führt diesen Angriff aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Rarely seen by people, it is said to be drawn by the full moon to play at deserted lakes.",
		'fr-fr': "Il joue au bord des lacs déserts les soirs de pleine lune. Rares sont ceux qui l'ont aperçu."
	},

	thirdParty: {
		cardmarket: 277521,
		tcgplayer: 84347
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
