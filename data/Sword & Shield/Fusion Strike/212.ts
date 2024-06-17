import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [427],
	set: Set,

	name: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		it: "Buneary",
		pt: "Buneary",
		de: "Haspiror"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		en: "The reason it keeps one ear rolled up is so it can launch a swift counterattack if it's attacked by an enemy."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Double Kick"
		},

		damage: "20×",

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads."
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