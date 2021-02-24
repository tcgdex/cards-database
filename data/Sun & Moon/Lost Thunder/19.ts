import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Celebi ◇",
		fr: "Celebi ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 90,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Time Distortion",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "Devolve any number of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Distorsion Temporelle",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Faites dés-évoluer autant de vos Pokémon de Banc autant de fois que vous voulez. Placez chaque carte Évolution retirée de cette façon dans votre main.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Vampigraine",
			},
			effect: {
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
