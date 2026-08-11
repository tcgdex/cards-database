import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Nidoran♀",
		'fr-fr': "Nidoran ♀",
		'de-de': "Nidoran W"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		29,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf drei Münzen. Deiser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon named Nidoran M or Nidoran F and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				'fr-fr': "Cherchez dans votre deck un Pokémon de base appelé Nidoran ♀ or Nidoran ♂ et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				'de-de': "Suche in deinem Deck nach einer Basis-Pokémon-Karte mit dem Namen Nidoran M oder Nidoran W und lege sie auf deine Bank. Mische dein deck dannach. (Du kannst diesen Angriff nicht einsetzen, wenn deine Bank voll ist.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Although small, its venomous barbs make this Pokémon dangerous. The female has smaller horns.",
		'fr-fr': "Ce Pokémon est hérissé de dards empoisonnés. Les femelles ont des dards plus petits."
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	],
}

export default card
