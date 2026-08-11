import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢幻"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "基因中含有所有寶可夢的資訊，因此據說牠能使用所有的招式。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "神秘尾巴"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方6張卡。選擇其中1張物品卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神射擊"
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
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card