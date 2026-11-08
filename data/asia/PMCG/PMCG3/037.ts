import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴローン",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [75],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'ja-jp': "硬化します",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中に、砂利と抵抗を適用した後）に30回以下の損害が発生したときはいつでも、そのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},

		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'ja-jp': "ロックスロー",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575701
			},
		},
	],
};

export default card
