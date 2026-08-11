import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霓虹魚V",
		ja: "ネオラントV"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "夜光標誌",
			ja: "ルミナスサイン"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水迴旋",
			ja: "アクアリターン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			ja: "このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card