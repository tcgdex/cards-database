import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索羅亞克",
		th: "โซโรอาร์ค"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "據說當牠的棲息地快要暴露在人類面前時，牠會製造出幻影， 讓人在森林裡不斷徘徊。",
		th: "กล่าวกันว่าพอมนุษย์ทำท่าจะมาทำลายที่อยู่อาศัย ก็จะทำให้เห็นภาพหลอนจนเดินวนเวียนไปมาอยู่ในป่า"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幻影變化",
			th: "แปลงร่างลวงตา"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【1階進化】寶可夢卡（「索羅亞克」除外）。然後，將這隻寶可夢與附加的卡全部丟棄，將所選的寶可夢放置於這隻寶可夢原先所在的地方。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดโปเกมอน [ร่าง1] (ยกเว้น [โซโรอาร์ค]) 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา หลังจากนั้น ทิ้งโปเกมอนนี้และการ์ดทั้งหมดที่ติดอยู่บนตำแหน่งทิ้งการ์ด แล้ววางโปเกมอนที่เลือกบนตำแหน่งที่โปเกมอนนี้เคยอยู่"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗黑爆破",
			th: "ไนท์เบิรสต์"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card