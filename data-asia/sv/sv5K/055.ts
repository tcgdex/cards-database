import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨルノズク",
		'zh-tw': "貓頭夜鷹",
		th: "โยรุโนะซึคุ",
		'zh-cn': "貓頭夜鷹"
	},

	illustrator: "toi8",
	rarity: "Common",
	category: "Pokemon",
	dexId: [164],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "特殊な つくりの 両目は わずかな 光さえ あれば 暗闇でも 昼のように 見える。",
		'zh-tw': "雙眼有著特殊的構造，只要有些微的光線，即使在黑暗中 也能看得像白天一樣清楚。",
		th: "ตาทั้งสองที่มีกลไกพิเศษนั้น แค่มีแสงเพียงเล็กน้อย ไม่ว่าจะมืดแค่ไหนก็สามารถมองเห็นได้เหมือนตอนกลางวัน",
		'zh-cn': "雙眼有著特殊的構造，只要有些微的光線，即使在黑暗中 也能看得像白天一樣清楚。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぎづめハント",
			'zh-tw': "鉤爪搜尋",
			th: "กรงเล็บล่า",
			'zh-cn': "鉤爪搜尋"
		},

		damage: 70,

		effect: {
			ja: "のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			'zh-tw': "若希望，從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
			th: "หากต้องการ เลือกการ์ดที่ชอบได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
			'zh-cn': "若希望，從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
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
	regulationMark: "H"
}

export default card