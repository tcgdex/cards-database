import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig"
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
				fr: "Détecteur arrière"
			},
			effect: {
				en: "Each player's Active Basic Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
				fr: "Les Pokémon de base Actifs de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers."
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
				fr: "Prévoyance"
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order you like.",
				fr: "Regardez les 5 cartes du dessus du deck de n'importe quel joueur et replacez-les au dessus du deck dans l'ordre que vous voulez."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Disorder",
				fr: "Désordre"
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur possède des cartes Énergie spéciale, le Pokémon Défenseur est maintenant Confus."
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





}

export default card
