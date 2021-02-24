import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Ninetales",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Color Shift",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of your opponent's Pokémon. Ninetales is the same type as that Pokémon (all if that Pokémon is more than 1 type) until the end of your turn. This power can't be used if Ninetales is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Blast",
			},
			effect: {
				en: "Discard a Fire Energy attached to Ninetales.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],





}

export default card
