import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バケッチャ",
		'zh-tw': "南瓜精",
		th: "บาเค็จจะ"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [710],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "かぼちゃの 穴から 照らしている 光は 見た 人や ポケモンを 催眠状態にして 操る。",
		'zh-tw': "南瓜的洞裡發出的光會催眠並控制看到牠的人和寶可夢。",
		th: "แสงที่ส่องออกมาจากรูของฟักทองสามารถสะกดจิตและควบคุมมนุษย์หรือโปเกมอนที่มองแสงนั้น"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "タネばくだん",
			'zh-tw': "種子炸彈",
			th: "ระเบิดเมล็ดพืช"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card