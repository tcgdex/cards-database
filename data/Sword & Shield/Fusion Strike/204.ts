import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		es: "Kangaskhan",
		it: "Kangaskhan",
		pt: "Kangaskhan",
		de: "Kangama"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		en: "You shouldn't get close to the child when it's playing outside its mother's pouch. Its mother is always nearby watching over it."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pound"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Coordinated One-Two Punch"
		},

		damage: "60+",

		effect: {
			en: "Flip a coin. If heads, this attack does 100 more damage."
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