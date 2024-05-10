import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドキングex",
		'zh-tw': "呆呆王ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "うんちく",
			'zh-tw': "博學"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ウィズダムヘッド",
			'zh-tw': "才智頭擊"
		},

		damage: 130,

		effect: {
			ja: "のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			'zh-tw': "若希望，從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card