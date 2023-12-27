import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Appletun V",
		fr: "Dratatin V",
		es: "Appletun V",
		it: "Appletun V",
		pt: "Appletun V",
		de: "Schlapfel V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 3,
	regulationMark: "E",
	illustrator: "aky CG Works",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Headbutt"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Sweet Impact"
		},

		damage: 100,

		effect: {
			en: "Heal 30 damage from this Pokémon."
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
