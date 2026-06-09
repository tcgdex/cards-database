import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "キョジオーン",
		th: "เคียวจีโอน",
		ko: "콜로솔트"
	},

	illustrator: "kodama",
	category: "Pokemon",
	dexId: [934],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "指先を 擦りあわせて 塩を ケガした ポケモンに 振りかけると ひどい 傷も たちまち 治る。",
		th: "ถูปลายนิ้วและโปรยเกลือใส่โปเกมอนที่บาดเจ็บ แม้จะเป็นบาดแผลที่สาหัสก็จะหายในทันที",
		ko: "손끝을 문질러서 나온 소금을 다친 포켓몬에게 뿌리면 심한 상처도 금방 낫는다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エナジーがんえん",
			th: "พลังงานเกลือหิน",
			ko: "에너지 암염"
		},

		effect: {
			ja: "自分の番に1回使える。自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンのHPを「30」回復する。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา หลังจากนั้น ฟื้นฟู HP ของโปเกมอนที่ติดการ์ดนั้น [30]",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 트래쉬에서 「기본 (격투) 에너지」를 1장 선택해서 자신의 포켓몬에게 붙인다. 그 뒤, 붙인 포켓몬의 HP를 「30」회복한다."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ランドクラッシュ",
			th: "แลนด์ครัช",
			ko: "랜드크래시"
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