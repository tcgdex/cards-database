import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "バクオング",
		'zh-tw': "爆音怪",
		th: "บาคุองก์"
	},

	illustrator: "LINNE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [295],
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "大声だけじゃない。 体の 穴から いろいろな 音色を 出し 仲間と 意思疎通を するのだ。",
		'zh-tw': "不只會大吼，還會從身上的洞發出各種音色 與夥伴們彼此溝通。",
		th: "ไม่ใช่แค่เสียงดังอย่างเดียว จะส่งเสียงท่วงทำนองต่าง ๆ ออกมาจากรูตามตัวเพื่อสื่อสารกับพวกพ้องด้วย"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サドンシャウト",
			'zh-tw': "乍然嚎叫",
			th: "ซัดเดนเชาต์"
		},

		effect: {
			ja: "相手のバトルポケモンと、ついているすべてのカードを、トラッシュする。この番、このポケモンが「ドゴーム」から進化していないなら、このワザは失敗。",
			'zh-tw': "將對手的戰鬥寶可夢與附加的卡全部丟棄。在這個回合，若這隻寶可夢沒有從「吼爆彈」進化而來，則這個招式失敗。",
			th: "ทิ้งโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม และการ์ดทั้งหมดที่ติดอยู่ ที่ตำแหน่งทิ้งการ์ด เทิร์นนี้ ถ้าโปเกมอนนี้ไม่ได้วิวัฒนาการมาจาก [โดกอม] ท่าต่อสู้นี้จะล้มเหลว"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘッドバング",
			'zh-tw': "鐵頭碰",
			th: "เฮดแบงก์"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card