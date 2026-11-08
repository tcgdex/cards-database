import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'de-de': "Snibunna"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
				'de-de': "Ränkeschmied"
			},
			effect: {
				'en-us': "Search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck n'importe quelle carte et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Karte und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Dark Pulse",
				'fr-fr': "Vibrobscur",
				'de-de': "Finsteraura"
			},
			effect: {
				'en-us': "Does 10 damage times the total amount of Darkness Energy attached to all of your Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre d'Énergies Darkness attachées à tous vos Pokémon.",
				'de-de': "Dieser Angriff fügt für jede -Energie, die an deine Pokémon angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They live in cold regions, forming groups of four or five that hunt prey with impressive coordination.",
		'fr-fr': "Ils vivent par groupe de 4 ou 5 en région froide et chassent de façon très organisée."
	},

	thirdParty: {
		cardmarket: 277539,
		tcgplayer: 90531
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
