import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Sewaddle",
		fr: "Larveyette",
		es: "Sewaddle",
		it: "Sewaddle",
		pt: "Sewaddle",
		de: "Strawickl"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Grass Munch"
		},

		damage: 10,

		effect: {
			en: "Discard a Grass Energy from your opponent's Active Pokémon."
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