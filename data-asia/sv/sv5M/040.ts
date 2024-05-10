import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍頭地鼠",
		th: "โดริวซึ"
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "有許多看似自然形成的洞窟其實都是龍頭地鼠 一陣亂鑽之後留下來的。",
		th: "ว่ากันว่า แม้จะดูเหมือนเป็นถ้ำที่เกิดจากธรรมชาติ แต่ก็ยังมีร่องรอยการขุดของโดริวซึอยู่"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "泥巴射擊",
			th: "มัดช็อต"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝撞",
			th: "ไวลด์แท็กเกิล"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย"
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card