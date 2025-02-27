import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのチョロネコ",
		'zh-tw': "N的扒手貓",
		'zh-cn': "N的扒手貓"
	},

	illustrator: "Keisin",
	rarity: "Common",
	category: "Pokemon",
	dexId: [509],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "愛くるしい しぐさで 油断させ 寄ってきた 相手を いきなり ツメで ひっかいて 笑っている。",
		'zh-tw': "會用可愛的動作讓對手放下戒心， 趁對方靠過來時冷不防用爪子 猛抓，然後得意地大笑。",
		'zh-cn': "會用可愛的動作讓對手放下戒心， 趁對方靠過來時冷不防用爪子 猛抓，然後得意地大笑。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ちょろまかす",
			'zh-tw': "暗槓",
			'zh-cn': "暗槓"
		},

		damage: 30,

		effect: {
			ja: "相手の手札を見て、その中からカードを1枚選び、相手の山札の下にもどす。",
			'zh-tw': "查看對手的手牌，從其中選擇1張卡，放回對手的牌庫下方。",
			'zh-cn': "查看對手的手牌，從其中選擇1張卡，放回對手的牌庫下方。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card