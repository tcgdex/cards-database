import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Beldeneige",
		en: "Frosmoth"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Water",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Danse de Glace",
				en: "Ice Dance"
			},
			effect: {
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Eau de votre main à l'un de vos Pokémon Eau de Banc.",
				en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Onde Boréale",
				en: "Aurora Beam"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	evolveFrom: {
		en: "Snom",
		fr: "Frissonille"
	}
}

export default card
