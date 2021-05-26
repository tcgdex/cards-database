import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Porygon-Z",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		474,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon2",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Install",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), move a Technical Machine card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Porygon-Z is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Learning",
			},
			effect: {
				en: "Search your deck for a Pokémon LV.X that levels up from 1 of your Pokémon and put it onto that Pokémon. (This counts as leveling up that Pokémon). Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overload",
			},
			effect: {
				en: "Does 40 damage plus 20 more damage for each Technical Machine card attached to Porygon-Z.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],





}

export default card
