import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拳拳蛸",
		'zh-cn': "拳拳蛸",
		ja: "タタッコ"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "會為了尋找食物而登上陸地。 擁有旺盛的好奇心，不管看到什麼， 都會先用觸手打一打再說。",
		'zh-cn': "會為了尋找食物而登上陸地。 擁有旺盛的好奇心，不管看到什麼， 都會先用觸手打一打再說。",
		ja: "餌を 求め 地上に 上がる。 好奇心旺盛で 目にしたものは とりあえず 触手で 殴る。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞一下",
			'zh-cn': "撞一下",
			ja: "ちょっとつっこむ"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'zh-cn': "這隻寶可夢也受到10點傷害。",
			ja: "このポケモンにも10ダメージ。"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [852]
}

export default card