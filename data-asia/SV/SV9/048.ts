import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "サナギラス",
		'zh-tw': "沙基拉斯",
		'zh-cn': "沙基拉斯"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [247],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "体内で 圧縮させた ガスを 勢いよく 噴出させ 飛んで 暴れまわる サナギだ。",
		'zh-tw': "會以強勁的力道噴出在體內 壓縮好的氣體，好讓自己 能飛在空中大搞破壞的蛹。",
		'zh-cn': "會以強勁的力道噴出在體內 壓縮好的氣體，好讓自己 能飛在空中大搞破壞的蛹。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "とっしん",
			'zh-tw': "猛撞",
			'zh-cn': "猛撞"
		},

		damage: 60,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'zh-cn': "這隻寶可夢也受到20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card