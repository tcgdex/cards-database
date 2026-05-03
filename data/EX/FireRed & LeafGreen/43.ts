import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		de: "Parasek"
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
		en: "Paras",
		fr: "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Energy Powder",
				fr: "Poudre d'Énergie",
				de: "Energiepuder"
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards and attach them to any of your Pokémon (excluding Pokémon-ex) in any way you like. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base et attachez-les aux Pokémon que vous voulez (sauf les Pokémon-ex) de la façon que vous voulez. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon (außer Pokémon-ex) an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic Spore",
				fr: "Toxic Spore",
				de: "Toxische Sporen"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
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

	thirdParty: {
		cardmarket: 276219,
		tcgplayer: 87957
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
