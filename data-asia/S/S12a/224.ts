import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布莉姆溫VMAX",
		ja: "ブリムオンVMAX"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "魔女的領域",
			ja: "まじょのりょういき"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。選擇最多2個放置於自己的場上寶可夢身上的傷害指示物，改放於對手的戰鬥寶可夢身上。",
			ja: "自分の番に1回使える。自分の場のポケモンにのっているダメカンを2個まで選び、相手のバトルポケモンにのせ替える。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超極巨天譴雷誅",
			ja: "キョダイテンバツ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 150,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card