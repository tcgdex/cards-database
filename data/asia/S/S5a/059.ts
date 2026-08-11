import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哈約克",
		th: "เฮอเดอเรีย"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "長久以來一直與人類共同生活。就連遠古時代的壁畫上都留有牠的身影。",
		th: "อยู่ร่วมกับคนนานจนถึงขนาดมีภาพวาดอยู่บนกำแพงหินสมัยโบราณ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "猛撞",
			th: "พุ่งเข้าใส่"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 20 ด้วย"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card