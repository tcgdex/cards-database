import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Azelf",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		482,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Downer Material",
			},
			effect: {
				en: "If you have Uxie and Mesprit in play, the attack cost of each of your opponent's Basic Pokémon's attack is Colorless more. You can't use more than 1 Downer Material Poké-Body each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bind Pulse",
			},
			effect: {
				en: "During your opponent's next turn, your opponent can't attach any Special Energy cards from his or her hand to any of his or her Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],





}

export default card
