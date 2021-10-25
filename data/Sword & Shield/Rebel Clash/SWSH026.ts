import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Mantine"
	},

	illustrator: "0313",
	rarity: "None",
	category: "Pokemon",
	dexId: [226],
	hp: 110,
	types: ["Water"],

	description: {
		en: "If it builds up enough speed swimming, it can jump out above the waves and glide for over 300 feet."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Reserve"
		},

		effect: {
			en: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Wave Splash"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card