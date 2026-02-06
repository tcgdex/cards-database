import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴン",
		'zh-tw': "多邊獸",
		th: "โพรีกอน"
	},

	illustrator: "Taiga Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [137],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "近年は 電脳空間で 大活躍。 怪しい データが ないか チェックして まわっている。",
		'zh-tw': "近年在電腦空間大展身手。會四處巡邏查看有沒有可疑的資料。",
		th: "หลายปีที่ผ่านมา มันมีบทบาทอย่างมากในไซเบอร์สเปซ คอยตระเวนตรวจสอบว่ามีข้อมูลน่าสงสัยหรือไม่"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "データはじき",
			'zh-tw': "資料處理",
			th: "ดีดข้อมูล"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ฝ่ายตรงข้าม"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741875
	}
}

export default card