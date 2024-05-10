import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ペラップ",
		'zh-tw': "聒噪鳥",
		th: "เพแรป"
	},

	illustrator: "GOTO minori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [441],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "相手と 同じ 鳴き声を 出す ことで 仲間と 思いこませて 襲われないように しているのだ。",
		'zh-tw': "會發出與對手相同的叫聲，讓對方相信自己是同伴， 藉此避免遭到襲擊。",
		th: "จะส่งเสียงร้องเลียนแบบฝ่ายตรงข้าม ทำให้นึกว่าเป็นพวกเดียวกัน เพื่อไม่ให้ตัวเองถูกจู่โจม"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "アカペラ",
			'zh-tw': "無伴奏合唱",
			th: "อะแคปเปลลา"
		},

		effect: {
			ja: "自分の山札からたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "かぜおこし",
			'zh-tw': "起風",
			th: "เรียกลม"
		},

		damage: 20
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