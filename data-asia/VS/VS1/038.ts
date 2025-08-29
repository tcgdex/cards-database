import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "チャックのドンファン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [232],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "怒り攻撃",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "オーバーラン",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッド、そして相手がベンチ付きポケモンを持っている場合、そのうち1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 10,
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
