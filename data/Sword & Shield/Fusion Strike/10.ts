import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
		es: "Sewaddle",
		it: "Sewaddle",
		pt: "Sewaddle",
		de: "Strawickl"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		en: "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Trip Over"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Seed Bomb"
		},

		damage: 60
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card