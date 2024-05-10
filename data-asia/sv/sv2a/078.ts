import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャロップ",
		'zh-tw': "烈焰馬"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [78],
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "いちばん 脚が 速い ものが リーダー。 群れが 行く 場所や 走る 速度を 決めている。",
		'zh-tw': "奔跑速度最快的烈焰馬會成為首領，決定族群 前往的地點和奔跑速度。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			'zh-tw': "灼熱"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "マッハターン",
			'zh-tw': "音速迴轉"
		},

		damage: 90,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card