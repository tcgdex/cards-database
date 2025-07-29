import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
		de: "Magmar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Eruption",
				fr: "Éruption",
				de: "Eruption"
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 20 damage times the number of Energy cards discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Énergie ainsi défaussées.",
				de: "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl aller so abgelegten Energiekarten zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
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
		en: "The fiery surface of its body gives off a wavering, rippling glare that is similar to the sun."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279572
	}
}

export default card
