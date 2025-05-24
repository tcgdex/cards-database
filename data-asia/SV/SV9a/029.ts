import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シロナのミロカロス",
		'zh-tw': "<竹蘭的>美納斯",
		'zh-cn': "<竹蘭的>美納斯"
	},

	illustrator: "You Iribi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [350],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "虹色と 言われる きれいな ウロコは 見る方向を 変えると 様々な 色に 変化する。",
		'zh-tw': "被稱為是虹色的美麗鱗片 若是改變觀看的方向， 就會變化成各種顏色。",
		'zh-cn': "被稱為是虹色的美麗鱗片 若是改變觀看的方向， 就會變化成各種顏色。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "アクアスプリット",
			'zh-tw': "水分岔",
			'zh-cn': "水分岔"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン2匹にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的2隻備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的2隻備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card