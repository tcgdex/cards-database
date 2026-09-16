import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Mew"
	},

	illustrator: "YOSHIROTTEN",
	rarity: "RGB Rare",
	category: "Pokemon",
	dexId: [151],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide."
	},

	attacks: [{
		name: {
			en: "Psychic"
		},

		cost: ["Psychic", "Psychic"],

		damage: "10+",

		effect: {
			en: "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
