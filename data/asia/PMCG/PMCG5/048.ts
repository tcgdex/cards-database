import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タケシのイワーク",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [95],
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "怒鳴ります",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'ja-jp': "ロックスロー",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576760
			},
		},
	],
};

export default card
