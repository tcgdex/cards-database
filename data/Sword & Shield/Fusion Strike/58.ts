import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		en: "Even after Marill swims in a cold sea, its water- repellent fur dries almost as soon as Marill leaves the water. That's why this Pokémon is never cold."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Aqua Liner"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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