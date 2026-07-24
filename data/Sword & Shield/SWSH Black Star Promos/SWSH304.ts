import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine",
	},

	illustrator: "REND",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [59],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Sun-Drenched Tackle",
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack",
		},

		damage: 160
	}],

	evolveFrom: {
		en: "Growlithe",
	},

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,

	description: {
		en: "The sight of it running over 6,200 miles in a single day and night has captivated many people.",
	},

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2022"],
			thirdParty: {
				tcgplayer: 485844
			},
		},
	],

	regulationMark: "F"
}

export default card
