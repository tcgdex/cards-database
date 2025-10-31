import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Uninori",
	dexId: [893],
	attacks: [
		{
			cost: ["Grass"],
			name: {
				en: "Pluck off",
			},
			effect: {
				en: "Search your deck for up to 3 Basic Grass Energy cards, reveal them, and put them into your hand. " +
					"Then, shuffle your deck."
			}
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				en: "Hammer Whip",
			},
			effect:{
				en: "During your next turn, this Pokémon can't attack."
			},
			damage: 130,
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			subtype: "cosmos"
		}
	]
}

export default card
