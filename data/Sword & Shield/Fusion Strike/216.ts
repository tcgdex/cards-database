import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		it: "Hawlucha",
		pt: "Hawlucha",
		de: "Resladero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Taira Akitsu",

	description: {
		en: "It always strikes a pose before going for its finishing move. Sometimes opponents take advantage of that time to counterattack."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flying Stomp"
		},

		damage: 20,

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon."
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