import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢幻",
		th: "มิว",
		ja: "ミュウ"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "基因中含有所有寶可夢的資訊，因此據說牠能使用所有的招式。",
		th: "ว่ากันว่าในหน่วยพันธุกรรมของมันมีข้อมูลของโปเกมอนทั้งหมดรวมไว้อยู่ จึงสามารถใช้ท่าต่อสู้ได้ทุกท่า",
		ja: "遺伝子には すべての ポケモンの 情報が 含まれているので あらゆる 技が 使えるという。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "神秘尾巴",
			th: "หางลึกลับ",
			ja: "ふしぎなしっぽ"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方6張卡。選擇其中1張物品卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 6 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดไอเท็ม 1 ใบจากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から6枚見る。その中からグッズを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神射擊",
			th: "ไซโคช็อต",
			ja: "サイコショット"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [151],

	thirdParty: {
		cardmarket: 687530
	}
}

export default card