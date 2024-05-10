import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "パオジアン",
		'zh-tw': "古劍豹"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1002],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "大昔に 剣によって 露と消えた 者たちの 憎しみが 雪を まとい ポケモンになった。",
		'zh-tw': "遙遠過去喪命於劍下者的憎恨之情纏繞在雪上，變成了寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スノーブリング",
			'zh-tw': "雪之到來"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【水】能量」卡，附於自己的1隻寶可夢身上。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "ラースブレード",
			'zh-tw': "氣忿利刃"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card