import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snom",
		fr: "Frissonille",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ice Dance",
				fr: "Danse de Glace",
			},
			effect: {
				en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Eau de votre main à l’un de vos Pokémon Eay de Banc.",
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
				en: "Aurora Beam",
				fr: "Onde Boréale",
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



}

export default card
