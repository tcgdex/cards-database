import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麒麟奇"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "尾巴上也有著小小的大腦。如果有誰靠近就會對氣味 產生反應並咬過來，要特別注意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "幻象光線"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
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
	regulationMark: "F"
}

export default card