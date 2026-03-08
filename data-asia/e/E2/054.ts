import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "ドンファン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [232],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "地震",
			},
			effect: {
				ja: "あなた自身のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "二重吸い込み",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
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
