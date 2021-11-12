import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "miki kudo",

	description: {
		en: "Because the eggs on their bellies have been overharvested by people in the past, the Chansey population remains very small."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Drain Slap"
		},

		damage: 30,

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Gentle Slap"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card