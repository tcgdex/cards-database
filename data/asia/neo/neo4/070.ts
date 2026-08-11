import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒットモンチャン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [107],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "ダッジ",
			},
			effect: {
				ja: "Hitmonchanが対戦相手の次のターン中に攻撃によって損傷を受けた場合は、コインをひっくり返します。頭の場合は、Hitmonchanに攻撃の損傷を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				ja: "超音波ジャブ",
			},
			damage: 40,
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
