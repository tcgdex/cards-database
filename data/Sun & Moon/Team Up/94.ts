import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		675,
	],
	hp: 140,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tighten Up",
				fr: "Resserrage",
			},
			effect: {
				en: "Your opponent discards 2 cards from their hand.",
				fr: "Votre adversaire défausse 2 cartes de sa main.",
			},
			damage: 60,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise Humeur",
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
			},
			damage: 170,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
