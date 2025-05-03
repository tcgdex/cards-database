import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Victreebel"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Weepinbell"
	},

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
		cost: ["Grass", "Colorless"],

		name: {
			en: "Vine Whip"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
	}
}

export default card
