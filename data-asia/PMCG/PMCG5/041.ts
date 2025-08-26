import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "SurgeのElectabuzz",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [125],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "充電",
			},
			effect: {
				ja: "廃棄パイルから最大2枚の稲妻エネルギーカードを取り、それらをサージ中将のエレクトアバズに取り付けます。",
			},
		},
		{
			cost: ["Lightning"],
			name: {
				ja: "排出",
			},
			effect: {
				ja: "この攻撃を使用するために、Surge Lt. SurgeのElectabuzzに取り付けられたすべてのLightningエネルギーカードを廃棄します。廃棄した稲妻エネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
