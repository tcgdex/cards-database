import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Chandelure"
	},

	illustrator: "Yoshioka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [609],
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",

	description: {
		en: "Being consumed in Chandelure's flame burns up the spirit, leaving the body behind."
	},

	attacks: [{
		name: {
			en: "Eerie Glow"
		},

		cost: ["Psychic", "Psychic"],

		damage: 130,

		effect: {
			en: "Your opponent's Active Pokémon is now Burned and Confused."
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

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907682,
				tcgplayer: 716471
			}
		}
	],
}

export default card
