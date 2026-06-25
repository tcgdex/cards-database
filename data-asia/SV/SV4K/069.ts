import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コソクムシ",
		th: "โคโซคูมูชิ",
		ko: "꼬시레"
	},

	illustrator: "Oku",
	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "群れで かたまり つねに まわりを 警戒している。 敵の 気配を 感じると 散り散りに 逃げ出す。",
		th: "รวมกันเป็นฝูงคอยระแวดระวังรอบข้างอยู่ตลอด ถ้ารู้สึกถึงวี่แววของศัตรูก็จะหนีกระจัดกระจายกันไป",
		ko: "무리가 모여 다니며 항상 주위를 경계한다. 적의 기척을 느끼면 뿔뿔이 흩어져 도망간다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こっそりたべる",
			th: "แอบกิน",
			ko: "몰래먹기"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 패에서 앞면을 보지 않고 1장 선택해서 트래쉬한다."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ぶつかる",
			th: "กระแทก"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741322
	}
}

export default card