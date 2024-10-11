import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ダルマッカ",
		'zh-tw': "火紅不倒翁",
		th: "ดารุมักกะ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "osare",
	dexId: [554],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "体の 中で 燃える 炎が パワーの 源。 火が 小さく なると たちまち 眠ってしまう。",
		'zh-tw': "能量之源是體內的火焰。 如果火焰變小了， 牠馬上就會睡著。",
		th: "ไฟที่เผาไหม้อยู่ในร่างกายเป็นแหล่งพลังงาน หากเปลวเพลิงหรี่เล็กลงก็จะหลับไปในทันที"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かいりき",
			'zh-tw': "怪力",
			th: "พลังมหากาฬ"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ほのおタックル",
			'zh-tw': "火焰衝撞",
			th: "ไฟกระแทก"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card