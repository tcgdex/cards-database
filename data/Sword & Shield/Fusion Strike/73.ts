import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja V",
		fr: "Amphinobi V",
		es: "Greninja V",
		it: "Greninja V",
		pt: "Greninja V",
		de: "Quajutsu V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Water Drip"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Dancing Shuriken"
		},

		damage: "80×",

		effect: {
			en: "Flip 3 coins. This attack does 80 damage for each heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card