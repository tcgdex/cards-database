import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		en: "The way it protects itself by flailing its arms may be an adorable sight, but stay well away. This is flailing that can snap thick tree trunks."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beat"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Rollout"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card