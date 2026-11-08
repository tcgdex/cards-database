import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キョジオーン",
		'zh-tw': "鹽石巨靈",
		'th-th': "เคียวจีโอน",
		'ko-kr': "콜로솔트"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [934],
	hp: 160,
	types: ["Fighting"],

	description: {
		'ja-jp': "指先を 擦りあわせて 塩を ケガした ポケモンに 振りかけると ひどい 傷も たちまち 治る。",
		'zh-tw': "只要合起指尖，搓出鹽來灑在受傷的寶可夢身上， 就算再重的傷都會瞬間痊癒。",
		'th-th': "ถูปลายนิ้วและโปรยเกลือใส่โปเกมอนที่บาดเจ็บ แม้จะเป็นบาดแผลที่สาหัสก็จะหายในทันที",
		'ko-kr': "손끝을 문질러서 나온 소금을 다친 포켓몬에게 뿌리면 심한 상처도 금방 낫는다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "エナジーがんえん",
			'zh-tw': "能量岩鹽",
			'th-th': "พลังงานเกลือหิน",
			'ko-kr': "에너지 암염"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンのHPを「30」回復する。",
			'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇1張「基本【鬥】能量」卡，附於自己的寶可夢身上。然後，將附上那張卡的寶可夢恢復「30」HP。",
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา หลังจากนั้น ฟื้นฟู HP ของโปเกมอนที่ติดการ์ดนั้น [30]",
			'ko-kr': "자신의 차례에 1번 사용할 수 있다. 자신의 트래쉬에서 「기본 (격투) 에너지」를 1장 선택해서 자신의 포켓몬에게 붙인다. 그 뒤, 붙인 포켓몬의 HP를 「30」회복한다."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'ja-jp': "ランドクラッシュ",
			'zh-tw': "大地粉碎",
			'th-th': "แลนด์ครัช",
			'ko-kr': "랜드크래시"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741389,
				tcgplayer: 565795,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card