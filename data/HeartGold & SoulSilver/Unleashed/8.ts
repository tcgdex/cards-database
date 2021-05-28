import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Celebration Wind",
				fr: "Vent de fête",
			},
			effect: {
				en: "Once during your turn, when you put Shaymin from your hand onto your Bench, you may move as many Energy cards attached to your Pokémon as you like to any of your other Pokémon.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Shaymin de votre main sur votre Banc, vous pouvez prendre une ou plusieurs cartes Énergie attachées à l'un de vos Pokémon et les attacher à un autre Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Bloom",
				fr: "Énergie florissante",
			},
			effect: {
				en: "Remove 3 damage counters from each of your Pokémon that has any Energy attached to it.",
				fr: "Retirez 3 marqueurs de dégât à chacun de vos Pokémon ayant une ou plusieurs cartes Énergie.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
