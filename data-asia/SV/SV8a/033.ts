import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "アリゲイツ",
		id: "Croconaw",
		th: "อัลลิเกต",
		'zh-tw': "藍鱷",
		'zh-cn': "藍鱷"
	},

	illustrator: "Jerky",
	rarity: "None",
	category: "Pokemon",
	dexId: [159],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "キバは 抜けても 次から 次に 生えてくる。いつも 口の中には ４８本の キバが そろっている。",
		id: "Meskipun copot, taring Croconaw akan terus-menerus tumbuh. Di dalam mulutnya, selalu ada 48 taring lengkap.",
		th: "แม้เขี้ยวจะหลุดไป ก็จะงอกขึ้นมาใหม่เรื่อย ๆ ในปากจึงมีเขี้ยวครบ 48 ซี่เสมอ",
		'zh-tw': "即使牙齒掉了也會 不斷重新長出來。 嘴裡總是長滿著４８顆牙齒。",
		'zh-cn': "即使牙齒掉了也會 不斷重新長出來。 嘴裡總是長滿著４８顆牙齒。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ぎゃくふんしゃ",
			id: "Dorongan Balik",
			th: "พ่นน้ำสวนทาง",
			'zh-tw': "逆向噴射",
			'zh-cn': "逆向噴射"
		},

		damage: 30,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan.",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'zh-cn': "將這隻寶可夢與備戰寶可夢互換。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card