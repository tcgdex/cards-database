import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'de-de': "Laschoking"
	},

	illustrator: "Aya Kusube",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [199],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bursting Hand",
				'fr-fr': "Main explosive",
				'de-de': "Platzende Hand"
			},
			effect: {
				'en-us': "Look at your opponent's hand. This attack does 10 damage times the number of Energy cards there.",
				'fr-fr': "Regardez la main de votre adversaire. Cette attaque inflige 10 dégâts multipliés par le nombre de cartes Énergie qui s'y trouvent.",
				'de-de': "Schau dir die Karten auf der Hand deines Gegners an. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl Energiekarten, die er auf der Hand hat, zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shuffle Attack",
				'fr-fr': "Attaque déconcertante",
				'de-de': "Mischattacke"
			},
			effect: {
				'en-us': "Look at a number of cards on top of your opponent's deck equal to the number of Energy cards attached to the Defending Pokémon. Put those cards in any order, and then put them back on top of your opponent's deck.",
				'fr-fr': "Regardez un nombre de cartes égal au nombre de cartes Énergie attachées au Pokémon Défenseur au-dessus du deck de votre adversaire. Mélangez ces cartes dans n'importe quel ordre, puis replacez-les au-dessus du deck de votre adversaire.",
				'de-de': "Schaue dir soviele Karten oben vom Deck deines Gegners an, wie Energiekarten an das Verteidigende Pokémon angelegt sind. Sortiere diese Karten beliebig und lege sie dann oben auf das Deck deines Gegners zurück."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89312,
				cardmarket: 275106
			}
		},
	]
}

export default card
