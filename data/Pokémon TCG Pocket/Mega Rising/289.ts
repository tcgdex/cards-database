import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Victreebel"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [71],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Weepinbell"
	},

	description: {
		en: "Said to live in huge colonies deep in jungles,\nalthough no one has ever returned from there."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fragrance Trap"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot, once during your turn, you may switch in 1 of your opponent's Benched Basic Pokémon to the Active Spot."
		}
	}],

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card