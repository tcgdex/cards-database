import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団参上!",
	},

	illustrator: "Ken Sugimori",
	rarity: "Secret Rare",
	category: "Trainer",

	variants: [
		{
			type: "holo",
		},
				{
						type: "normal",
						thirdParty: {
								tcgplayer: 575757
						},
				}
	],
};

export default card
