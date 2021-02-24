import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Groudon",
		fr: "Groudon",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 130,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drought",
				fr: "Sécheresse",
			},
			effect: {
				en: "Attach up to 2 Fighting Energy cards from your hand to 1 of your Pokémon.",
				fr: "Attachez jusqu’à 2 cartes Énergie Fighting de votre main à l’un de vos Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Trembling Ground",
				fr: "Terrain Tremblant",
			},
			effect: {
				en: "This Pokémon can't use Trembling Ground during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Terrain Tremblant pendant votre prochain tour.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
