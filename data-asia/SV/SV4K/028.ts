import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コロモリ",
		'zh-tw': "滾滾蝙蝠",
		th: "โคโรโมริ"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [527],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "超音波を 放ちながら フラフラと 飛びまわり エサの 虫ポケモンを 探している。",
		'zh-tw': "一邊發出超音波，一邊飛來飛去尋找蟲寶可夢 來填飽自己的肚子。",
		th: "กระพือปีกบินไปพร้อมกับปล่อยคลื่นความถี่สูงเพื่อหาโปเกมอนแมลงที่เป็นเหยื่อของมัน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		}
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
	regulationMark: "G"
}

export default card