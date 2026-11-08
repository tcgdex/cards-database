import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Blissey Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [242],
	hp: 160,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "至福のサポート",
			},
			effect: {
				'ja-jp': "ターン中に、手からブリッシーの元をプレイしてポカンの1つを進化させると、ポケモンの任意の数に取り付けられたすべてのエネルギーカードを破棄し、それらのポケモンからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "エネルギー吸収",
			},
			effect: {
				'ja-jp': "廃棄パイルから最大3枚のエネルギーカードをブリッシーエクシートに取り付けます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ロールアウトする",
			},
			damage: 60,
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
