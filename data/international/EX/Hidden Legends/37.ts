import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Igglybuff",
		'fr-fr': "Toudoudou",
		'de-de': "Fluffeluff"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [174],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution bébé",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Jigglypuff from your hand onto Igglybuff (this counts as evolving Igglybuff), and remove all damage counters from Igglybuff.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Rondoudou de votre main sur Toudoudou (vous faites ainsi évoluer Toudoudou) et retirer à Toudoudou tous ses marqueurs de dégât.",
				'de-de': "Once during your turn (before your attack), you may put Jigglypuff from your hand onto Igglybuff (this counts as evolving Igglybuff), and remove all damage counters from Igglybuff."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Set Song",
				'fr-fr': "Chanson programmée",
				'de-de': "Set Song"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and a basic Energy card, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez un Pokémon de base et une carte Énergie de base dans votre deck, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a Basic Pokémon and a basic Energy card, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86260,
				cardmarket: 276111
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86260,
				cardmarket: 276111
			}
		},
	]
}

export default card
