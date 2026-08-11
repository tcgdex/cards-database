import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "政治",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [186],
	hp: 110,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "突然の成長",
			},
			effect: {
				ja: "あなたの手から政治に任意の数の基本的なエネルギーカードを添付してください。",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "カエルホップ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "エネルギースプラッシュ",
			},
			effect: {
				ja: "ベンチ付きポケモンの1つまたは2つに政治的に取り付けられた2つの水エネルギーカードを移動します。 （同じポケモンまたはそれぞれ1つの両方を2つの異なるポケモンに置くことができます。）ベンチポケモンがない場合は、この効果を無視してください。",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
