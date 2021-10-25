import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Arrokuda"
	},

	illustrator: "tetsuya koizumi",
	rarity: "None",
	category: "Pokemon",
	dexId: [846],
	hp: 60,
	types: ["Water"],

	description: {
		en: "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It's very proud of that jaw."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flock"
		},

		effect: {
			en: "Search your deck for up to 2 Arrokuda and put them onto your Bench. Then, shuffle your deck."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Peck"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card