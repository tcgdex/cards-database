import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エイパム",
		'zh-tw': "長尾怪手",
		th: "เอย์แพม"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "木の 上から 獲物が いないか 探す。 好物の アマカジを 見ると 興奮して 飛びかかるぞ。",
		'zh-tw': "會從樹上尋找獵物。只要發現自己愛吃的甜竹竹，就會興奮地飛撲過去。",
		th: "จะคอยมองหาเหยื่อจากบนต้นไม้ พอเจออมาคาจิที่เป็นของโปรด จะตื่นเต้นจนกระโดดเข้าใส่"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くすねる",
			'zh-tw': "偷盜",
			th: "ฉกฉวย"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひらてうち",
			'zh-tw': "掌擊",
			th: "ฝ่ามือตบ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card