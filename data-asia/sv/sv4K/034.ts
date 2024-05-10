import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コジョンド",
		'zh-tw': "師父鼬",
		th: "โคโจนโดะ"
	},

	illustrator: "Mousho",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [620],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "目にも 止まらぬ スピードで 繰りだす 蹴りは 巨大な 岩も 木っ端みじんに 砕く。",
		'zh-tw': "快到無法看清的踢腿非常強烈，即使是 巨大的岩石也能粉碎。",
		th: "ลูกเตะที่ปล่อยออกมาด้วยความเร็วสูงแบบจับตามองไม่ทัน ทลายได้กระทั่งหินใหญ่มหึมาให้แตกเป็นเศษ ๆ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "さんだんづき",
			'zh-tw': "三段撞",
			th: "ชกสามครั้ง"
		},

		damage: "20×",

		effect: {
			ja: "コインを3回投げ、オモテの数×20ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×20點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たつじんのムチ",
			'zh-tw': "達人之鞭",
			th: "แส้ของผู้เชี่ยวชาญ"
		},

		damage: "50+",

		effect: {
			ja: "この番、手札からこのポケモンに「ポケモンのどうぐ」をつけていたなら、70ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌將「寶可夢道具」卡附於這隻寶可夢身上，則增加70點傷害。",
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