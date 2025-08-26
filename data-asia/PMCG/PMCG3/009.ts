import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "モルトレス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [146],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "山火事",
			},
			effect: {
				ja: "この攻撃を使用すると、モルトレスに取り付けられた火災エネルギーカードを廃棄することができます。もしそうなら、相手のデッキの上部から多くのカードを捨ててください。",
			},

		},
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: {
				ja: "ダイブ爆弾",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 80,
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
