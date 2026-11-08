import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Cleffa",
		'fr-fr': "Melo",
		'de-de': "Pii"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		173,
	],

	hp: 50,

	types: [
		"Colorless",
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
				'en-us': "Once during your turn (before your attack), you may put Clefairy from your hand onto Cleffa (this counts as evolving Cleffa) and remove all damage counters from Cleffa.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Melofée de votre main sur Melo (vous faites ainsi évoluer Melo) et retirer à Melo tous ses marqueurs de dégât.",
				'de-de': "Once during your turn (before your attack), you may put Clefairy from your hand onto Cleffa (this counts as evolving Cleffa) and remove all damage counters from Cleffa."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Eeeeeeek",
				'fr-fr': "Arheuuuuu",
				'de-de': "Eeeeeeek"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck, then draw 6 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
				'de-de': "Shuffle your hand into your deck, then draw 6 cards."
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
				tcgplayer: 84365,
				cardmarket: 276667
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84365,
				cardmarket: 276667
			},
		}
	],
}

export default card
