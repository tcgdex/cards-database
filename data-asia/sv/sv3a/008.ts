import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルキア",
		'zh-tw': "帕路奇亞"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [484],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "空間を ゆがめる 能力を 持ち シンオウ地方の 神話では 神様として 描かれている。",
		'zh-tw': "擁有扭曲空間的能力。在神奧地區的神話裡 被描述為神。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "テレポートブレイク",
			'zh-tw': "瞬間移動突擊"
		},

		damage: 30,

		effect: {
			ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "サイドカウンター",
			'zh-tw': "獎賞反擊"
		},

		damage: "80+",

		effect: {
			ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、80ダメージ追加。",
			'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則增加80點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card