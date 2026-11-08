import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [126],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Eruption",
				'fr-fr': "Éruption",
				'de-de': "Eruption"
			},
			effect: {
				'en-us': "Each player discards the top card of his or her deck. This attack does 20 damage times the number of Energy cards discarded in this way.",
				'fr-fr': "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Énergie ainsi défaussées.",
				'de-de': "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl aller so abgelegten Energiekarten zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Glühen"
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

	retreat: 2,

	description: {
		'en-us': "The fiery surface of its body gives off a wavering, rippling glare that is similar to the sun."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87051,
				cardmarket: 279572
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279572,
				tcgplayer: 87051
			}
		},
	],

}

export default card
