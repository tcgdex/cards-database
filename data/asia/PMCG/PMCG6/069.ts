import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カツラのガルーラ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [115],
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "子供のパンチ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ワンツーパンチ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて10ダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575364
			},
		},
	],
};

export default card
