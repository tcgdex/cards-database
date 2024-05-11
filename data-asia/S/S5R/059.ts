import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆炸頭水牛",
		th: "บัฟฟรอน"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "就算使出猛烈的頭錘，蓬鬆的體毛也能將傷害都吸收掉。",
		th: "แม้จะโดนหัวพุ่งชนรุนแรงแค่ไหน ขนที่ฟูฟ่องก็จะดูดซับความเสียหายให้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "食草"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用的招式，對對手的【草】寶可夢造成的傷害「+60」點。"
		}
	}, {
		name: {
			'zh-tw': "爆炸頭突擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	abilities: [{
		type: "Ability",

		name: {
			th: "กินพืช"
		},

		effect: {
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้ใช้ทำกับโปเกมอน [หญ้า] ของฝ่ายตรงข้าม จะถูก [+60]"
		}
	}]
}

export default card