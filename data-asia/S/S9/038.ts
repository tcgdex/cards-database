import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勒克貓",
		ja: "ルクシオ"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "如果與夥伴尾巴牽尾巴，就能借用對方的電能， 然後發出更強的電擊。",
		ja: "しっぽを つなげて 仲間から 電気エネルギーを 分けてもらうと より 強い 電撃を 放てる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電擊",
			ja: "でんきショック"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [404]
}

export default card