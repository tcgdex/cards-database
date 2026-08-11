import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Research",
				'fr-fr': "Recherche psy",
				'de-de': "Psychoforschung"
			},
			effect: {
				'en-us': "Search your discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your discard pile.)",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Supporter et utilisez l'effet de cette carte comme l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse.)",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Unterstützerkarte und nutze ihren Effekt als Effekt dieses Angriffs. (Die Unterstützerkarte bleibt in deinem Ablagestapel.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Telekinesis",
				'fr-fr': "Télékinésie",
				'de-de': "Telekinese"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz des gewählten Pokémon nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is highly perceptive of its Trainer's feelings. It dances when it is feeling happy.",
	},

	thirdParty: {
		cardmarket: 277806,
		tcgplayer: 86466
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"]
		}
	]
}

export default card
