import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
	},
	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		784,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Uppercut",
				fr: "Uppercut Enragé",
			},
			effect: {
				en: "If this Pokémon has 8 or more damage counters on it, this attack does 120 more damage.",
				fr: "Si ce Pokémon a 8 marqueurs de dégâts ou plus, cette attaque inflige 120 dégâts supplémentaires.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
