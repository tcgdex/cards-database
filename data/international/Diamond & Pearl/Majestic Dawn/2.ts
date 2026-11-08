import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Cresselia",
		'fr-fr': "Cresselia",
		'de-de': "Cresselia"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		488,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Future Sight",
				'fr-fr': "Prescience",
				'de-de': "Seher"
			},
			effect: {
				'en-us': "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck d'1 des joueurs et replacez-les au dessus de ce deck dans n'importe quel ordre.",
				'de-de': "Schau dir die obersten 5 Karten des Decks eines Spielers an und lege die Karten in beliebiger Reihenfolge auf das Deck dieses Spielers zurück."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Healing Light",
				'fr-fr': "Lumière soignante",
				'de-de': "Heilendes Licht"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon.",
				'fr-fr': "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				'de-de': "Entferne 1 Schadensmarke von jedem deiner Pokémon."
			},
			damage: 40,

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
		'en-us': "Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.",
	},

	thirdParty: {
		cardmarket: 278051,
		tcgplayer: 84468
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
