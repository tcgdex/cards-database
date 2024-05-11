import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夜巡靈",
		ja: "ヨマワル"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說一旦發現不聽話的孩子，牠就會在深夜裡把那個孩子 帶去某個不知名的地方。",
		ja: "いいつけを 守らない 子供を 見つけると 夜中に どこかへ 連れていくと いわれている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蠱惑",
			ja: "まどわす"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【混亂】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
		},

		damage: 10,
		cost: ["Psychic"]
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
	regulationMark: "F",
	rarity: "Common",
	dexId: [355]
}

export default card