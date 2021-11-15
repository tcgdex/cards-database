import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Sandshrew",
		fr: "Sabelette",
		es: "Sandshrew",
		it: "Sandshrew",
		pt: "Sandshrew",
		de: "Sandan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuka Morii",

	description: {
		en: "When its skin gets wrinkled from moisture, it heads for a volcano. It lies flat on a spot with a lot of geothermal heat and dries itself out."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Dig It Up"
		},

		effect: {
			en: "Look at the top card of your deck. You may discard that card."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Let's All Rollout"
		},

		damage: "20×",

		effect: {
			en: "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card