import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いレディアン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [166],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "フラッシュタッチ",
			},
			effect: {
				ja: "ベンチ付きポケモンがある場合は、Light Ledianで1つを切り替えます。そのポケモンがあなたのアクティブなポケモンである限り、それは眠り、混乱し、麻痺し、毒されることはできません。 （攻撃、ポケモンパワー、トレーナーカードの他のすべての効果はまだ発生しています。）",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "彗星パンチ",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
