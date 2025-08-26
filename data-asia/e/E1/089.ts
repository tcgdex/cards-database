import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "マチャンプ-089/128",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "テラフォーミング",
			},
			effect: {
				ja: "順番<em>（攻撃の前）</em> </em>、デッキの上位4枚のカードを見て、好きなように並べ替えることができます。 Machampが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "鉄の拳",
			},
			effect: {
				ja: "プレイしているポケモンの数を数えて、それらにダメージカウンターでカウントします。コインをひっくり返します。頭の場合、この攻撃は50のダメージに加えて、それらのポケモンのそれぞれに対してさらに10ダメージを与えます。",
			},
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
