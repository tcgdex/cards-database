import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃焰王牌"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'zh-tw': "擁有熟練的進攻和防守技巧。只要得到聲援就會更有衝勁，但有時會為了出風頭而弄巧成拙。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "火場力量"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害，依對手已經獲得的獎賞卡每1張「+30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火球射擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 150,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card