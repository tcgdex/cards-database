import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "始祖小鳥",
		th: "อาเคน"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "從化石成功復原的寶可夢。正如研究所指出的，雖然 牠不會飛，但卻擅於跳躍。",
		th: "ฟื้นสภาพจากฟอสซิลได้สำเร็จ แม้จะไม่สามารถบินได้ตามที่วิจัย แต่เป็นโปเกมอนที่ถนัดด้านการกระโดด"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "羽擊",
			th: "ตีปีก"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利爪劈擊",
			th: "กรงเล็บฉีกร่าง"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card