import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "音箱蟀"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "用短刀般的手臂發出聲音。所奏出 的旋律隨個體不同而異，從中尋找 自己喜愛的旋律也是一大樂事。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "充溢旋律"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的場上的所有【草】寶可夢（「音箱蟀」除外）的最大HP各增加「40」。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card