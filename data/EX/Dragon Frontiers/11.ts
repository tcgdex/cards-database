import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Togetic δ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 60,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Togepi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Copy",
			},
			effect: {
				en: "Choose an attack on 1 of your opponent's Pokémon in play that has δ on its card. Delta Copy copies that attack except for its Energy cost. (You must still do anything else required for that attack.) Togetic performs that attack.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
