import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "スナノケガワex",
		th: "ขนทรายex",
		ko: "모래털가죽 ex"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "じりょくきゅうしゅう",
			th: "ดูดซับแรงแม่เหล็ก",
			ko: "자력 흡수"
		},

		effect: {
			ja: "相手のサイドの残り枚数が4枚以下なら、自分の番に1回使える。自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้ามน้อยกว่าหรือเท่ากับ 4 ใบ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			ko: "상대의 남은 프라이즈 장수가 4장 이하라면 자신의 차례에 1번 사용할 수 있다. 자신의 트래쉬에서 「기본 (격투) 에너지」를 1장 선택해서 이 포켓몬에게 붙인다."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "グラウンドスパイク",
			th: "กราวนด์สไปก์",
			ko: "그라운드 스파이크"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card