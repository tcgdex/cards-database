import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オムナイト",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [138],
	hp: 40,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "千里眼",
			},
			effect: {
				'ja-jp': "あなたの対戦相手は彼または彼女の手を上にして遊ぶ。このパワーは機能しなくなり、オマニテは特別な状態の影響を受けます。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "ウォーターガン",
			},
			effect: {
				'ja-jp': "Omanyteに付着した各水エネルギーに対して10ダメージに加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575672
			},
		},
	],
};

export default card
