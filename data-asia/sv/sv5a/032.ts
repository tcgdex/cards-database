import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハラバリー",
		'zh-tw': "電肚蛙"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [939],
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "目玉に 見えるが じつは お腹の へそダイナモで 作った 電気を 撃ちだす 放電器官なのだ。",
		'zh-tw': "看似眼球的部位其實是 放電器官，能夠用來發射 腹部的發電臍製造的電力。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "でんきショック",
			'zh-tw': "電擊"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "ライトニングボール",
			'zh-tw': "雷電球"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card