import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "垃垃藻",
		th: "คูซูโม",
		ja: "クズモー"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "會混在海藻屑裡漂浮在大海，並且捕獵來吃海藻的寶可夢， 當作大餐飽吃一頓。",
		th: "ลอยอยู่ในทะเลปะปนไปกับเศษสาหร่าย เพื่อคอยล่าโปเกมอนที่มากินสาหร่ายเอาไว้เป็นลาภปาก",
		ja: "藻屑に 紛れて 海を 漂い 海藻を 食べに来た ポケモンを しとめて ご馳走に するのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			ja: "たいあたり"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "溶解",
			th: "หลอมละลาย",
			ja: "とかす"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [690]
}

export default card