import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Golisopod"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Wimpod"
	},

	description: {
		en: "It will do anything to win, taking advantage of every opening and finishing opponents off with the small claws on its front legs."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "First Impression"
		},

		damage: "60+",
		cost: ["Grass", "Grass", "Grass"],

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
