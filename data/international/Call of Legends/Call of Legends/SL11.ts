import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'de-de': "Suicune"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [245],

	hp: 90,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Extreme Speed",
				'fr-fr': "Vitesse extrême",
				'de-de': "Turbotempo"
			},
			effect: {
				'en-us': "Suicune's Retreat Cost is Colorless less for each Water Energy attached to Suicune.",
				'fr-fr': "Le Coût de retraite de Suicune est Colorless de moins pour chaque Énergie Water attachée à Suicune.",
				'de-de': "Die Rückzugskosten von Suicune verringern sich für jede an Suicune angelegte -Energie um ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Tsunami",
				'fr-fr': "Tsunami",
				'de-de': "Tsunami"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon de votre adversaire (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,

	description: {
		'en-us': "This Pokémon races across the land. It is said that north winds will somehow blow whenever it appears.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89606,
				cardmarket: 279636
			},
		},
	],

}

export default card
