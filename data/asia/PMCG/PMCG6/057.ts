import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サカキのワンリキー",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [66],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "チョップ",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'ja-jp': "フューリーパンチ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドの場合、この攻撃は20倍のダメージ数のダメージ数がジョバンニのマチュップのカウンターカウンターになります。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575306
			},
		},
	],
};

export default card
