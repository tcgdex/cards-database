import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Shellder",
		fr: "Kokiyas",
		es: "Shellder",
		it: "Shellder",
		pt: "Shellder",
		de: "Muschas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "kawayoo",

	description: {
		en: "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Tongue Slap"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card