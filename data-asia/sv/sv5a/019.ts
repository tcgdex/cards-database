import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘイガニ",
		'zh-tw': "龍蝦小兵",
		th: "เฮกานิ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [341],
	hp: 80,
	types: ["Water"],

	description: {
		ja: "水質が 悪くても 平気なので ほかの 水ポケモンと エサの 奪い合いがなく どんどん 増えた。",
		'zh-tw': "即使水質惡劣也不以為意，因此 不會和其他水寶可夢爭奪食物， 使得牠們的數量不斷增加。",
		th: "แม้ว่าคุณภาพน้ำจะไม่ดีก็ไม่มีปัญหา จึงไม่ต้องแย่งอาหารกับโปเกมอนน้ำตัวอื่น ๆ ทำให้จำนวนของมันเพิ่มขึ้นเรื่อย ๆ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "はさむ",
			'zh-tw': "夾住",
			th: "หนีบ"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card