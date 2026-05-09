import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エイパム",
		th: "เอย์แพม",
		ko: "에이팜"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "木の 上から 獲物が いないか 探す。 好物の アマカジを 見ると 興奮して 飛びかかるぞ。",
		th: "จะคอยมองหาเหยื่อจากบนต้นไม้ พอเจออมาคาจิที่เป็นของโปรด จะตื่นเต้นจนกระโดดเข้าใส่",
		ko: "나무 위에서 먹이를 찾는다. 좋아하는 달콤아를 발견하면 흥분해서 덤벼든다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くすねる",
			th: "ฉกฉวย",
			ko: "슬쩍 훔치기"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			ko: "자신의 덱을 1장 뽑는다."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひらてうち",
			th: "ฝ่ามือตบ",
			ko: "수벽치기"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741878
	}
}

export default card