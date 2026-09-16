import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja"
	},

	illustrator: "GIDORA",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [658],
	hp: 300,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Stealthy Slash"
		},

		cost: ["Water"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each damage counter on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		name: {
			en: "Aqua Edge"
		},

		cost: ["Water", "Water"],

		damage: 160,
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907755,
				tcgplayer: 716230
			}
		}
	],
}

export default card
