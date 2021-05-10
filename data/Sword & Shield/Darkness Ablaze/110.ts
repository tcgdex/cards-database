import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Hydreigon",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zweilous",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Squall",
			},
			effect: {
				en: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Pitch-Black Fangs",
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
	regulationMark: "D"
}

export default card
