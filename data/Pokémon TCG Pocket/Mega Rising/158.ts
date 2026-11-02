import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pangoro",
		fr: "Pandarbare"
	},

	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [675],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle"
	},

	description: {
		en: "Using its leaf, Pangoro can predict the moves of\nits opponents. It strikes with punches that can\nturn a dump truck into scrap with just one hit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Overdrive Smash",
			fr: "Boost Atomisant"
		},

		damage: 30,
		cost: ["Darkness"],

		effect: {
			en: "During your next turn, this Pokémon's Overdrive Smash attack does +30 damage.",
			fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige + 30 dégâts."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card