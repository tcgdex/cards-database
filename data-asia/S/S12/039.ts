import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "象徵鳥",
		th: "ซิมโบลา",
		ja: "シンボラー"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "利用精神力量在空中飛翔，被稱為古代都市的守護神。 也有人認為牠是守護神的使者。",
		th: "บินบนท้องฟ้าด้วยพลังไซคิก ได้รับการเล่าขานว่าเป็นเทพหรือบริวารเทพที่ปกปักษ์เมืองสมัยโบราณ",
		ja: "サイコパワーで 空を 飛ぶ。 古代都市の 守り神 とも その遣いとも いわれている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "警告",
			th: "วอร์นนิง",
			ja: "ワーニング"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。若對手的戰鬥寶可夢為「寶可夢【V】」，則可放置於備戰區的【基礎】寶可夢數量改為最多5張。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【V】] จำนวนการ์ดโปเกมอน[พื้นฐาน]ที่สามารถวางบนเบนช์ได้สูงสุดจะเป็น 5 ใบ",
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。相手のバトルポケモンが「ポケモンV」なら、ベンチに出せるたねポケモンの数は5枚までになる。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利刃之風",
			th: "คัตเตอร์วินด์",
			ja: "カッターウインド"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [561],

	thirdParty: {
		cardmarket: 680178
	}
}

export default card