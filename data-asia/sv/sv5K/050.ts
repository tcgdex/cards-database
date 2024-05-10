import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤミラミ",
		'zh-tw': "勾魂眼",
		th: "ยามิรามิ"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [302],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "暗い 洞窟に 棲み処を 作り 鋭い ツメを 使って 宝石を 掘り出しては 食べる。",
		'zh-tw': "會在陰暗的洞窟裡建造住所，並用鋒利的爪子挖寶石吃。",
		th: "สร้างรังอยู่ในถ้ำมืดมิด ใช้เล็บแหลมคมขุดหาอัญมณีเป็นอาหาร"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ツメできりさく",
			'zh-tw': "利爪劈擊",
			th: "กรงเล็บฉีกร่าง"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ダメージコレクト",
			'zh-tw': "傷害集結",
			th: "รวบรวมแดเมจ"
		},

		effect: {
			ja: "相手のベンチポケモンにのっているダメカンを好きなだけ選び、相手のバトルポケモンにのせ替える。",
			'zh-tw': "選擇任意數量的對手的備戰寶可夢身上放置的傷害指示物，改放於對手的戰鬥寶可夢身上。",
			th: "เลือกตัวนับแดเมจที่วางอยู่บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามจำนวนที่ชอบ ย้ายไปวางที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card