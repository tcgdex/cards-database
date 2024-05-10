import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノワダチex",
		'zh-tw': "鐵轍跡ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "トリプルレーザー",
			'zh-tw': "三重鐳射"
		},

		effect: {
			ja: "相手のポケモン3匹に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的3隻寶可夢各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			ja: "サイバネホイール",
			'zh-tw': "控制輪"
		},

		damage: 160,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
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

	retreat: 3,
	regulationMark: "G"
}

export default card