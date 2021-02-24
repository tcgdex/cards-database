import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ampharos δ",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Flaaffy",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Holon Veil",
			},
			effect: {
				en: "Treat each Basic Pokémon and Evolution card in your deck, in your discard pile, in your hand, and in play as a Pokémon that has δ on its card.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Circle",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Pokémon you have in play that has δ on its card.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
