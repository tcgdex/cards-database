import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Tenefix"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synergy Effect",
				fr: "Effet synergie"
			},
			effect: {
				en: "If Phoebe's Stadium is in play, prevent all damage done to Sableye by attacks from your opponent's Pokémon-ex.",
				fr: "Si Stade de Spectra est en jeu, prévenez tous les dégâts infligés à Tenefix par des attaques de Pokémon-ex de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Down Draw",
				fr: "Pioche du dessous"
			},
			effect: {
				en: "Draw 2 cards from the bottom of your deck.",
				fr: "Piochez 2 cartes du dessous de votre deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon."
			},

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-30"
		},
	],




}

export default card
