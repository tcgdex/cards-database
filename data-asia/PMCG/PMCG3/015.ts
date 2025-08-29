import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "オマニテ",
	},

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
				ja: "千里眼",
			},
			effect: {
				ja: "あなたの対戦相手は彼または彼女の手を上にして遊ぶ。このパワーは機能しなくなり、オマニテは特別な状態の影響を受けます。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "Omanyteに付着した各水エネルギーに対して10ダメージに加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
