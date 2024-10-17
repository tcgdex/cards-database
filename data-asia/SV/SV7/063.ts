import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "流氓熊貓",
		'zh-cn': "流氓熊貓",
		ja: "ゴロンダ"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'zh-tw': "性情暴躁，靠力氣解決問題。 為與堵攔熊一對一比拼 而燃燒自己的鬥志。",
		'zh-cn': "性情暴躁，靠力氣解決問題。 為與堵攔熊一對一比拼 而燃燒自己的鬥志。",
		ja: "気性が 荒く 腕力で 黙らせる。 タチフサグマとの 一騎打ちに 闘志を 燃やす。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拉扯",
			'zh-cn': "拉扯",
			ja: "ひっぱる"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			'zh-cn': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暴走",
			'zh-cn': "暴走",
			ja: "あばれまわる"
		},

		effect: {
			'zh-tw': "將這隻寶可夢【混亂】。",
			'zh-cn': "將這隻寶可夢【混亂】。",
			ja: "このポケモンをこんらんにする。"
		},

		damage: 160,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [675]
}

export default card