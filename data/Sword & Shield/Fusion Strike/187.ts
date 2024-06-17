import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [777],
	set: Set,

	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
		es: "Togedemaru",
		it: "Togedemaru",
		pt: "Togedemaru",
		de: "Togedemaru"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		en: "When it's in trouble, it curls up into a ball, makes its fur spikes stand on end, and then discharges electricity indiscriminately."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Let's All Rollout"
		},

		damage: "20×",

		effect: {
			en: "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Rolling Attack"
		},

		damage: 50
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card