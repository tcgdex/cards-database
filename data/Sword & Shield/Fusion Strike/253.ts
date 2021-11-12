import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Hoopa V",
		fr: "Hoopa V",
		es: "Hoopa V",
		it: "Hoopa V",
		pt: "Hoopa V",
		de: "Hoopa V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "takuyoa",

	abilities: [{
		type: "Ability",

		name: {
			en: "Two-Faced"
		},

		effect: {
			en: "As long as this Pokémon is in play, it is Psychic and Darkness type."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Shadow Impact"
		},

		damage: 170,

		effect: {
			en: "Put 3 damage counters on 1 of your Pokémon."
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