import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		it: "Vikavolt",
		pt: "Vikavolt",
		de: "Donarion"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		it: "Charjabug",
		pt: "Charjabug",
		de: "Akkup"
	},

	stage: "Stage2",
	retreat: 0,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		en: "If it carries a Charjabug to use as a spare battery, a flying Vikavolt can rapidly fire high-powered beams of electricity."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bite"
		},

		damage: 70
	}, {
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		name: {
			en: "Electro Blaster"
		},

		effect: {
			en: "Discard 2 Lightning Energy from this Pokémon. This attack does 200 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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