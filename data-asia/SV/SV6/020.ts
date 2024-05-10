import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ランプラー",
		'zh-tw': "燈火幽靈"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Rond",
	dexId: [608],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。",
		'zh-tw': "吸取靈魂來點亮燈火。 為了等待人類死去， 而在醫院裡徘徊遊蕩。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "もえつくす",
			'zh-tw': "燃燒盡"
		},

		damage: 60,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card