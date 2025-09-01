import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Rayquaza Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [384.1],
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "らせん成長",
			},
			effect: {
				ja: "尾がなくなるまでコインをひっくり返します。各ヘッドについて、廃棄の山を検索して、基本的なエネルギーカードを調べ、Rayquaza Exに取り付けます。",
			},
		},
		{
			cost: ["Fire", "Lightning"],
			name: {
				ja: "ドラゴンバースト",
			},
			effect: {
				ja: "すべての火エネルギーまたはRayquaza Exに取り付けられたすべての稲妻エネルギーのいずれかを捨てます。この攻撃は、廃棄された火災または雷エネルギーの量を40回ダメージします。",
			},
		},
	],

	retreat: 2,

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
