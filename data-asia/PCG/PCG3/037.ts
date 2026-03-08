import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗い電極",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [101],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "暗闇のナビゲーション",
			},
			effect: {
				ja: "ターン中（攻撃前）に、暗い電極にエネルギーが付着していない場合は、デッキを検索して暗闇や暗い金属エネルギーを検索し、暗い電極に取り付けることができます。その後、デッキをシャッフルします。暗い電極が特別な状態の影響を受ける場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "エネルギー爆弾",
			},
			effect: {
				ja: "暗い電極に取り付けられたすべてのエネルギーカードを、好きな方法でベンチ付きポケモンに移動できます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
