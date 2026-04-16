import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "オタマロ",
		'zh-tw': "圓蝌蚪",
		th: "โอทามาโร"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [535],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "音波で 仲間と 連絡する。 警戒の 鳴き声は 人や ほかの ポケモンには 聞こえない。",
		'zh-tw': "透過音波來聯繫夥伴。人類和其他寶可夢都聽不見牠發出的警告聲。",
		th: "ติดต่อกับเพื่อนพ้องโดยใช้คลื่นเสียง เสียงร้องเตือนของมันทั้งมนุษย์และโปเกมอนอื่น ๆ ก็ไม่สามารถได้ยิน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スクリューテール",
			'zh-tw': "螺旋尾",
			th: "สกรูเทล"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723953
	}
}

export default card