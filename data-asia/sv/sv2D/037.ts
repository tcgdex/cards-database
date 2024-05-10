import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "サナギラス",
		'zh-tw': "沙基拉斯"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [247],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "体内で 圧縮させた ガスを 勢いよく 噴出させ 飛んで 暴れまわる サナギだ。",
		'zh-tw': "會以強勁的力道噴出在體內壓縮好的氣體，好讓自己 能飛在空中大搞破壞的蛹。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card