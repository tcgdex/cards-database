import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ルージュラ",
		'zh-tw': "迷唇姐",
		th: "รูจูลา"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Gapao",
	dexId: [124],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ガラルの とある 地域では 氷の 女王と 呼んで ルージュラを 恐れ崇めていた。",
		'zh-tw': "在伽勒爾的某個地區， 人們稱迷唇姐為冰之女王， 並且敬畏崇拜牠。",
		th: "ณ ดินแดนแห่งหนึ่งในกาลาร์ เคยยำเกรงต่อรูจูลาและเรียกเธอว่าราชินีน้ำแข็ง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おさそいキッス",
			'zh-tw': "邀請之吻",
			th: "จูบชักชวน"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。その後、このポケモンについているエネルギーを1個選び、新しく出したポケモンにつけ替える。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。然後，選擇1個這隻寶可夢身上附加的能量，改附於新上場的寶可夢身上。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด หลังจากนั้น เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนที่เพิ่งออกมาใหม่"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "スノーアイス",
			'zh-tw': "雪花冰",
			th: "สโนว์ไอซ์"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card