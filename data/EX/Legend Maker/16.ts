import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig",
		de: "Girafarig"
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
				en: "Rear Sensor",
				fr: "Détecteur arrière",
				de: "Heck-Sensor"
			},
			effect: {
				en: "Each player's Active Basic Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
				fr: "Les Pokémon de base Actifs de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers.",
				de: "Kein Aktives Basis-Pokémon (außer Pokémon-ex) kann seine Poké-Power einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Foresight",
				fr: "Prévoyance",
				de: "Voraussicht"
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order you like.",
				fr: "Regardez les 5 cartes du dessus du deck de n'importe quel joueur et replacez-les au dessus du deck dans l'ordre que vous voulez.",
				de: "Schau dir die obersten 5 Karten des Decks eines Spielers an und lege die Karten in beliebiger Reihenfolge auf dieses Deck zurück."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Disorder",
				fr: "Désordre",
				de: "Behinderung"
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur possède des cartes Énergie spéciale, le Pokémon Défenseur est maintenant Confus.",
				de: "Wenn an dem Verteidigenden Pokémon eine Spezial-Energiekarte angelegt ist, ist das Verteidigende Pokémon jetzt verwirrt."
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

