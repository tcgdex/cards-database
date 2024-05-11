import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波克基古"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說牠會為了將幸福帶給心地善良 的人而現身。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幸福之聲"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將自己的戰鬥寶可夢恢復「30」HP。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "妖精之風"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card