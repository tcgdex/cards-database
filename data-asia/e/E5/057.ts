import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "swinub",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [220],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "泥の平手打ち",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "オーバーラン",
			},
			effect: {
				ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。ヘッドの場合、それらのうちの1つを選択すると、この攻撃はそれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamps: ["1st Edition"],
		},
	],
};

export default card
