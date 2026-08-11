import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Energy Powder",
				'fr-fr': "Poudre d'Énergie",
				'de-de': "Energiepuder"
			},
			effect: {
				'en-us': "Search your deck for up to 2 basic Energy cards and attach them to any of your Pokémon (excluding Pokémon-ex) in any way you like. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base et attachez-les aux Pokémon que vous voulez (sauf les Pokémon-ex) de la façon que vous voulez. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon (außer Pokémon-ex) an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Toxic Spore",
				'fr-fr': "Toxic Spore",
				'de-de': "Toxische Sporen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

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
				cardmarket: 276219,
				tcgplayer: 87957
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276219,
				tcgplayer: 87957
			},
		},
	],
}

export default card
