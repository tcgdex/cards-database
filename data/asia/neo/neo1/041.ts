import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "フラフィー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [180],
	hp: 60,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "排出",
			},
			effect: {
				ja: "この攻撃を使用するために、Flaaffyに取り付けられたすべての稲妻エネルギーカードを廃棄します。廃棄した稲妻エネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "電流",
			},
			effect: {
				ja: "Flaaffyに取り付けられた1つのLightning Energyカードを使用して、ベンチ付きポケモンの1つに取り付けます。ベンチ付きポケモンがない場合は、そのエネルギーカードを捨ててください。",
			},
			damage: 20,
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
