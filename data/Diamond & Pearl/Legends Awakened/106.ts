import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		de: "Mauzi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pay Day",
				fr: "Jackpot",
				de: "Zahltag"
			},
			effect: {
				en: "Flip a coin. If heads, draw a card.",
				fr: "Lancez une pièce. Si c'est face, piochez une carte.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ziehe 1 Karte."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen.Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Son regard s'anime à la vue d'un objet brillant. C'est un Pokémon nocturne."
	},

	thirdParty: {
		cardmarket: 278255,
		tcgplayer: 87320
	}
}

export default card
