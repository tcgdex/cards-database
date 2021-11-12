import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Geodude",
		fr: "Racaillou",
		es: "Geodude",
		it: "Geodude",
		pt: "Geodude",
		de: "Kleinstein"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 3,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		en: "It uses both hands to climb precipitous cliffs. People who see it in action have been known to take up bouldering."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rollout"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Light Punch"
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