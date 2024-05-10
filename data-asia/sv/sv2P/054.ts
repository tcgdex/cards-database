import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ダイオウドウex",
		'zh-tw': "大王銅象ex"
	},

	illustrator: "Uta",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ブロンズボディ",
			'zh-tw': "青銅之軀"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "ノーズクエイク",
			'zh-tw': "鼻震"
		},

		damage: 260,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
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