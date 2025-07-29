import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Black Kyurem",
		fr: "Kyurem Noir",
		es: "Kyurem Negro",
		it: "Kyurem Nero",
		pt: "Kyurem Preto",
		de: "Schwarzes Kyurem"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dual Claw",
				fr: "Paire de Griffes",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flash Freeze",
				fr: "Tonnerre de Glace",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280687
	}
}

export default card
