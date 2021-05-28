import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre"
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
		fr: "Diamat"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Squall",
				fr: "Rafale Obscure"
			},
			effect: {
				en: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre main à l’un de vos Pokémon."
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
				fr: "Crocs Nuit Noire"
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
