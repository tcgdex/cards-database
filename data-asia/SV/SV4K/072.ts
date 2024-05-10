import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コジョンド",
		th: "โคโจนโดะ"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	dexId: [620],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "目にも 止まらぬ スピードで 繰りだす 蹴りは 巨大な 岩も 木っ端みじんに 砕く。",
		th: "ลูกเตะที่ปล่อยออกมาด้วยความเร็วสูงแบบจับตามองไม่ทัน ทลายได้กระทั่งหินใหญ่มหึมาให้แตกเป็นเศษ ๆ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "さんだんづき",
			th: "ชกสามครั้ง"
		},

		damage: "20×",

		effect: {
			ja: "コインを3回投げ、オモテの数×20ダメージ。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たつじんのムチ",
			th: "แส้ของผู้เชี่ยวชาญ"
		},

		damage: "50+",

		effect: {
			ja: "この番、手札からこのポケモンに「ポケモンのどうぐ」をつけていたなら、70ダメージ追加。",
			th: "เทิร์นนี้ ถ้าติดการ์ด [ไอเท็มติดโปเกมอน] จากบนมือที่โปเกมอนนี้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 70"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card