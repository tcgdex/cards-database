import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
		'de-de': "Celebi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Sprouting",
				'fr-fr': "Grandir",
				'de-de': "Keimen"
			},
			effect: {
				'en-us': "Search your deck for a Grass Energy card and attach it to Celebi. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Grass et attachez-la à Celebi. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer -Energiekarte und lege sie an Celebi an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Leaf Tornado",
				'fr-fr': "Tornade de feuilles",
				'de-de': "Blättertornado"
			},
			effect: {
				'en-us': "You may move any number of basic Grass Energy cards attached to your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Vous pouvez déplacer autant de cartes Énergie de base Grass attachées à vos Pokémon que vous voulez sur vos autres Pokémon de la façon que vous voulez.",
				'de-de': "Du kannst beliebig viele -Basis-Energiekarten, die an deinen Pokémon angelegt sind, in beliebiger Verteilung an deine anderen Pokémon anlegen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It has the power to travel across time, but is is said to appear only in peaceful times.",
		'fr-fr': "Il a le pouvoir de voyager dans le temps. Cependant, on dit qu'il n'apparaît qu'en temps de paix."
	},

	thirdParty: {
		cardmarket: 277636,
		tcgplayer: 84146
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
