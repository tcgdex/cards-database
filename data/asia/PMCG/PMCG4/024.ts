import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいカメックス",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [9],
	hp: 70,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				'ja-jp': "ハイドロキャノン",
			},
			effect: {
				'ja-jp': "30のダメージに加えて、ダークブラストワーズに付着した水エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ロケットタックル",
			},
			effect: {
				'ja-jp': "Dark Blastoiseはそれ自体に10ダメージを与えます。コインをひっくり返します。頭の場合は、相手の次のターン中に暗い爆風に与えられたすべてのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575743
			},
		},
	],
};

export default card
