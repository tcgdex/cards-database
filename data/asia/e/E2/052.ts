import { Card } from "../../../interfaces"
import Set from "../E2"

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
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "急ぐ",
			},
			effect: {
				ja: "5枚のコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。 Hitmonchanは次のターン中に攻撃できません。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スマッシュパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
