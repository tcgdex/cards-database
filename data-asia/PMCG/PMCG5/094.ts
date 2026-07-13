import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		// No Removal Gym
		ja: "リムーブ禁止ジム",
	},

	rarity: "Rare",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576835
			},
		},
	],
};

export default card
