import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蔓藤怪",
		th: "มอนจารา"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "藤蔓即使斷了也會繼續無限地生長。藤蔓下的 真面目至今仍是個謎。",
		th: "แม้เถาวัลย์จะขาดก็ยืดยาวออกมาได้ไม่มีที่สิ้นสุด ตัวตนลึก ๆ ที่แท้จริงของมัน จนทุกวันนี้ก็ยังพิสูจน์ไม่ได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "敲擊",
			th: "ตี"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "藤鞭",
			th: "แส้เถาวัลย์"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card