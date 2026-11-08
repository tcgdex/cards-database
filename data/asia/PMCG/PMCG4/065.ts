import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レインボーエネルギー",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Holo Rare",
	category: "Energy",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575755
			},
		},
	],
};

export default card
