import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Jellicent"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Frillish"
	},

	description: {
		en: "Whenever a full moon hangs in the night sky,\nschools of Jellicent gather near the surface of\nthe sea, waiting for their prey to appear."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Bouncy Body"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, take a {W} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Surf"
		},

		damage: 60,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card