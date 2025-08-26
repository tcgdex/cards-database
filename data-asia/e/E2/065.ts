import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Blissey -065/092",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [242],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "幸せな癒し",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、1つのベンチポクモンを選択し、コインをひっくり返します。頭の場合は、Blisseyに取り付けられたエネルギーの数を数え、選択したベンチポクモンからその多くのダメージカウンターを削除します。 Blisseyが特別な状態の影響を受けた場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スマッシュ爆撃機",
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
