import { Card } from "../../../interfaces"
import Set from "../web1"

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
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				ja: "ハイパーフレーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、モルトレスに取り付けられた1つの消防エネルギーカードを捨てます。尾の場合、モルトレスに取り付けられたすべてのエネルギーカードを捨ててください。エネルギーカードを破棄できない場合、この攻撃は何もしません。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
