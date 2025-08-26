import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョバンニのピンシル",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [127],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "スナップピンパー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20回以上のダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "オーバーヘッドトス",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃はベンチポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
