import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くギャラドス",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Fighting", "Fighting"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて、輝くギャラドスの各ダメージカウンターでさらに10ダメージを与えます。尾の場合、この攻撃は何もしません。",
			},
		},
		{
			cost: ["Water", "Water", "Fire", "Fire"],
			name: {
				ja: "壊滅的です",
			},
			effect: {
				ja: "輝くギャラドスに取り付けられた2つのファイアエネルギーカードを捨てるか、この攻撃は何もしません。この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）次に、コインをひっくり返します。ヘッドの場合は、エネルギーカードが付いているエネルギーカードを持っている各敵のポケモンに1枚のエネルギーカードを選択し、それらのエネルギーカードを破棄します。",
			},
			damage: 50,
		},
	],

	retreat: 3,

};

export default card
