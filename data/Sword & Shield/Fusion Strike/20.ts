import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [752],
	set: Set,

	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		pt: "Araquanid",
		de: "Aranestro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
		es: "Dewpider",
		it: "Dewpider",
		pt: "Dewpider",
		de: "Araqua"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		en: "It acts as a caretaker for Dewpider, putting them inside its bubble and letting them eat any leftover food."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Bubble Launch"
		},

		damage: 110,

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
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