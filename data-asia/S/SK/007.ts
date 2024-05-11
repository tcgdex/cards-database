import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢幻",
		ja: "ミュウ"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "遺伝子には　すべての　ポケモンの情報が　含まれているのであらゆる　技が　使えるという。",
		ja: "遺伝子には すべての ポケモンの 情報が 含まれているので あらゆる 技が 使えるという。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "神秘尾巴",
			ja: "ふしぎなしっぽ"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方6張卡。選擇其中1張物品卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から6枚見る。その中からグッズを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神射擊",
			ja: "サイコショット"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [151]
}

export default card