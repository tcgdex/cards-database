import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウインディ",
		'zh-tw': "風速狗"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [59],
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "草原を 駆け抜ける 様子は 人々の 心を 虜にしたと 昔の 絵巻に 記されていた。",
		'zh-tw': "根據過去的畫軸記載，牠在草原上奔馳的姿態 擄獲了眾多人心。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "あつくたぎる",
			'zh-tw': "熾熱沸騰"
		},

		damage: 30,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、このポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【火】能量」卡，附於這隻寶可夢身上。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			ja: "ダイナマイトファング",
			'zh-tw': "炸藥獠牙"
		},

		damage: 240,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的【火】能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card