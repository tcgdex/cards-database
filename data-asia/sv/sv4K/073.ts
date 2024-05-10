import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "キョジオーン",
		th: "เคียวจีโอน"
	},

	illustrator: "kodama",
	category: "Pokemon",
	dexId: [934],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "指先を 擦りあわせて 塩を ケガした ポケモンに 振りかけると ひどい 傷も たちまち 治る。",
		th: "ถูปลายนิ้วและโปรยเกลือใส่โปเกมอนที่บาดเจ็บ แม้จะเป็นบาดแผลที่สาหัสก็จะหายในทันที"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エナジーがんえん",
			th: "พลังงานเกลือหิน"
		},

		effect: {
			ja: "自分の番に1回使える。自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンのHPを「30」回復する。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา หลังจากนั้น ฟื้นฟู HP ของโปเกมอนที่ติดการ์ดนั้น [30]"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ランドクラッシュ",
			th: "แลนด์ครัช"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card