import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーユイex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ねたみこがす"
		},

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "フレイムサージ"
		},

		damage: 100,

		effect: {
			ja: "自分のベンチポケモンを3匹まで選び、山札から「基本エネルギー」を1枚ずつつける。そして山札を切る。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card