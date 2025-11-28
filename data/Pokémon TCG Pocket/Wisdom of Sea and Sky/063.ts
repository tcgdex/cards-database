import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Swanna",
		fr: "Lakmécygne"
	},

	illustrator: "chibi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [581],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Ducklett"
	},

	description: {
		en: "Despite their elegant appearance, they can flap\ntheir wings strongly and fly for thousands of miles.",
		fr: "Un Pokémon gracieux, mais aussi robuste. Il peut voler des milliers de kilomètres grâce à ses ailes puissantes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Feathery Cyclone",
			fr: "Cyclone de Plumes"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez toute l'Énergie de ce Pokémon vers un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["ho-oh"]
}

export default card