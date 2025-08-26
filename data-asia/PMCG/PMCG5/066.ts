import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのドラゴンエア",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [148],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ブリザード",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。尾の場合、この攻撃はあなた自身のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "取り除く",
			},
			effect: {
				ja: "Shuffle ErikaのDragonairとすべてのカードがデッキに取り付けられています。次に、相手はアクティブなポケモンとそれに取り付けられたすべてのカードを彼または彼女のデッキにシャッフルします。",
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
