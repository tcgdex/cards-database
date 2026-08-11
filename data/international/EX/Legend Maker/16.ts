import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'de-de': "Girafarig"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		203,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rear Sensor",
				'fr-fr': "Détecteur arrière",
				'de-de': "Heck-Sensor"
			},
			effect: {
				'en-us': "Each player's Active Basic Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
				'fr-fr': "Les Pokémon de base Actifs de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers.",
				'de-de': "Kein Aktives Basis-Pokémon (außer Pokémon-ex) kann seine Poké-Power einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Foresight",
				'fr-fr': "Prévoyance",
				'de-de': "Voraussicht"
			},
			effect: {
				'en-us': "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order you like.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck de n'importe quel joueur et replacez-les au dessus du deck dans l'ordre que vous voulez.",
				'de-de': "Schau dir die obersten 5 Karten des Decks eines Spielers an und lege die Karten in beliebiger Reihenfolge auf dieses Deck zurück."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Disorder",
				'fr-fr': "Désordre",
				'de-de': "Behinderung"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Special Energy cards attached to it, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur possède des cartes Énergie spéciale, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wenn an dem Verteidigenden Pokémon eine Spezial-Energiekarte angelegt ist, ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276893,
		tcgplayer: 85730
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamp: ["miska-saari"]
		}
	]
}

export default card

