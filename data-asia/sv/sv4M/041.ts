import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ハガネール",
		'zh-tw': "大鋼蛇"
	},

	illustrator: "Po-Suzuki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [208],
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "土と 一緒に 飲みこんだ 鉄分が 溜まっていって 体が 変化したとも 考えられる。",
		'zh-tw': "人們認為牠的身體是因為堆積了和泥土一起吞下的鐵質，才會發生變化的。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "じしん",
			'zh-tw': "地震"
		},

		damage: 130,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card