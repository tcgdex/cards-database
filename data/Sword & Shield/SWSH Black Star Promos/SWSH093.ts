import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "tetsuya koizumi",
	category: "Pokemon",

	description: {
		en: "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It’s very proud of that jaw."
	},

	stage: "Basic",

	name: {
		en: "Arrokuda"
	},

	rarity: "None",
	dexId: [846],
	hp: 60,
	types: ["Water"],

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

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card