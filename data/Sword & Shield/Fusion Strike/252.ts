import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Sandaconda V",
		fr: "Dunaconda V",
		es: "Sandaconda V",
		it: "Sandaconda V",
		pt: "Sandaconda V",
		de: "Sanaconda V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wall of Sand"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Land Crush"
		},

		damage: 140
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card