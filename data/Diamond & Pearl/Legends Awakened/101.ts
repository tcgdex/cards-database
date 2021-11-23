import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Triple Kick",
				fr: "Triple pied",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gut Spin",
				fr: "Tour de tripes",
			},
			effect: {
				en: "If Tyrogue is anywhere under Hitmontop, you may switch Hitmontop with 1 of your Benched Pokémon.",
				fr: "Si Debugant se trouve sous Kapoera, vous pouvez échanger Kapoera avec 1 des Pokémon de votre Banc.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il combat en tournoyant comme une toupie. La force centrifuge décuple sa puissance destructrice."
	}
}

export default card
