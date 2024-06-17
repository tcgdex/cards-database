import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [821],
	set: Set,

	name: {
		en: "Rookidee",
		fr: "Minisange",
		es: "Rookidee",
		it: "Rookidee",
		pt: "Rookidee",
		de: "Meikro"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		en: "Jumping nimbly about, this small-bodied Pokémon takes advantage of even the slightest opportunity to disorient larger opponents."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fury Attack"
		},

		damage: "10×",

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads."
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