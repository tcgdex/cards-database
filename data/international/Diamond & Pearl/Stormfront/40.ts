import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'de-de': "Alpollo"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Smog",
				'fr-fr': "Purédpois",
				'de-de': "Smog"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hoodwink",
				'fr-fr': "Duper",
				'de-de': "Reinlegen"
			},
			effect: {
				'en-us': "You may search your opponent's discard pile for up to 3 in any combination of Trainer, Supporter, or Stadium cards and put them into your opponent's hand.",
				'fr-fr': "Vous pouvez choisir dans la pile de défausse de votre adversaire une combinaison de jusqu'à 3 cartes Dresseur, Supporter ou Stade et les placer dans la main de votre adversaire.",
				'de-de': "Du kannst den Ablagestapel deines Gegners nach bis zu 3 Karten in beliebiger Kombination aus Trainer-, Unterstützer- und Stadion-Karten durchsuchen. Dein Gegner nimmt diese Karten auf die Hand."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can slip through any obstacle. It lurks inside walls to keep an eye on its foes.",
		'fr-fr': "Il peut traverser n'importe quel obstacle. Il rôde dans les murs pour surveiller ses ennemis."
	},

	thirdParty: {
		cardmarket: 278338,
		tcgplayer: 86028
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
	]
}

export default card
