import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
		de: "Cresselia"
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
				en: "Future Sight",
				fr: "Prescience",
				de: "Seher"
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck d'1 des joueurs et replacez-les au dessus de ce deck dans n'importe quel ordre.",
				de: "Schau dir die obersten 5 Karten des Decks eines Spielers an und lege die Karten in beliebiger Reihenfolge auf das Deck dieses Spielers zurück."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Healing Light",
				fr: "Lumière soignante",
				de: "Heilendes Licht"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von jedem deiner Pokémon."
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



}

export default card
