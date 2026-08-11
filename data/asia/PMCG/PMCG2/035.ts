import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プリン",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [39],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "子守lulaby",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},

		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ポンド",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576622
			},
		},
	],
};

export default card
