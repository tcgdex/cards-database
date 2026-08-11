import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オコリザル",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [57],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'ja-jp': "フューリースワイプ",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},

		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'ja-jp': "かんしゃく",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、プライムエーパーは（ダメージを与えた後）混乱しています。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576641
			},
		},
	],
};

export default card
