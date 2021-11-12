import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dreepy",
		fr: "Fantyrm",
		es: "Dreepy",
		it: "Dreepy",
		pt: "Dreepy",
		de: "Grolldra"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		en: "Without a Dreepy to place on its head and care for, it gets so uneasy it'll try to substitute any Pokémon it finds for the missing Dreepy."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Spooky Shot"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "U-turn"
		},

		damage: 30,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
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