import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花療環環",
		th: "คิววะวา",
		ja: "キュワワー"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "會用藤蔓摘花來裝飾自己。不知為何，黏在牠身上的 花朵都不會枯萎。",
		th: "ใช้เถาวัลย์เด็ดดอกไม้มาประดับตกแต่งตัวเอง ดอกไม้ที่ติดอยู่ตามตัวนั้นไม่รู้ว่าทำไมถึงไม่เหี่ยวเฉา",
		ja: "ツルを 使って 花を 摘み 自分を 飾る。 体に ついた 花は なぜか 枯れない。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "選花",
			th: "คัดสรรบุปผา",
			ja: "はなえらび"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方2張卡，選擇其中1張，加入手牌。將剩餘卡放置於放逐區。",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกใบใดใบหนึ่ง 1 ใบ นำขึ้นมือ การ์ดที่เหลือวางไว้ที่ลอสต์โซน",
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から2枚見て、どちらか1枚を選び、手札に加える。残りのカードはロストゾーンに置く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊",
			th: "โจมตีหมุนวน",
			ja: "かいてんアタック"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [764],

	thirdParty: {
		cardmarket: 687544
	}
}

export default card