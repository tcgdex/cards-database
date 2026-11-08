import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Mime Jr.",
		'fr-fr': "Mime Jr.",
		'de-de': "Pantimimi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		439,
	],

	hp: 40,

	types: [
		"Psychic",
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
				'en-us': "Once during your turn (before your attack), you may put Mr. Mime from your hand onto Mime Jr. (this counts as evolving Mime Jr.) and remove all damage counters from Mime Jr.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer M Mime de votre main sur Mime Jr. (vous le faites ainsi évoluer) et retirer à Mime Jr. tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Pantimos von deiner Hand auf Pantimimi legen (das zählt als Entwickeln von Pantimimi). Entferne alle Schadensmarken von Pantimimi."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Mime",
				'fr-fr': "Mime",
				'de-de': "Mimen"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				'fr-fr': "Mélangez votre main à votre deck. Ensuite, piochez autant de cartes qu'il y a de cartes dans la main de votre adversaire.",
				'de-de': "Mische deine Handkarten in dein Deck. Zähle danach die Anzahl der Karten auf der Hand deines Gegners. Ziehe ebenso viele Karten."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It habitually mimics foes. Once mimicked, the foe cannot take its eyes off this Pokémon.",
		'fr-fr': "Il imite ses ennemis. Une fois imités, ils ne peuvent plus quitter ce Pokémon des yeux."
	},

	thirdParty: {
		cardmarket: 277589,
		tcgplayer: 87469
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
