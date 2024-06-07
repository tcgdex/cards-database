import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騎拉帝納V",
		th: "กิราตินาV",
		ja: "ギラティナV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "深淵探求",
			th: "เสาะหาห้วงลึก",
			ja: "アビスシーク"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方4張卡，從其中選擇2張卡加入手牌。將剩餘卡放置於放逐區。",
			th: "ดูการ์ด 4 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด 2 ใบจากในนั้น นำขึ้นมือ การ์ดที่เหลือวางไว้ที่ลอสต์โซน",
			ja: "自分の山札を上から4枚見て、その中からカードを2枚選び、手札に加える。残りのカードはロストゾーンに置く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撕裂",
			th: "ฉีกกระจุย",
			ja: "ひきさく"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			th: "ไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคำนวณแดเมจของท่าต่อสู้นี้",
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		},

		damage: 160,
		cost: ["Grass", "Psychic", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card