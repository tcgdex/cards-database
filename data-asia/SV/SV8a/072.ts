import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハバタクカミ",
		id: "Flutter Mane",
		th: "เกศากระพือ",
		'zh-tw': "振翼髮",
		'zh-cn': "振翼髮"
	},

	illustrator: "kodama",
	rarity: "None",
	category: "Pokemon",
	dexId: [987],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "とある 書物に 登場する ハバタクカミという 生物と 似た 特徴を 持つ ポケモン。",
		id: "Pokémon yang memiliki karakteristik yang mirip dengan makhluk hidup bernama Flutter Mane yang disebutkan dalam suatu buku.",
		th: "โปเกมอนที่มีลักษณะเด่นเหมือนกับสิ่งมีชีวิตที่เรียกว่าเกศากระพือที่ปรากฏตัวในบันทึกเล่มหนึ่ง",
		'zh-tw': "與某本書裡記載的一種 叫做振翼髮的生物有著 相似特徵的寶可夢。",
		'zh-cn': "與某本書裡記載的一種 叫做振翼髮的生物有著 相似特徵的寶可夢。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あんやのはばたき",
			id: "Kepakan Malam Gelap",
			th: "สยายปีกคืนเดือนมืด",
			'zh-tw': "暗夜羽擊",
			'zh-cn': "暗夜羽擊"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンの特性（「あんやのはばたき」をのぞく）は、すべてなくなる。",
			id: "Selama Pokémon ini ada di Arena Bertarung, Pokémon Bertarung lawan menjadi tidak memiliki Ability (selain Kepakan Malam Gelap).",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ความสามารถของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม (ยกเว้น [สยายปีกคืนเดือนมืด]) ทั้งหมดจะหายไป",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢的特性（「暗夜羽擊」除外）全部消除。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢的特性（「暗夜羽擊」除外）全部消除。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "たたりとばす",
			id: "Menerbangkan Kutukan",
			th: "ปล่อยอาถรรพ์",
			'zh-tw': "飛來橫禍",
			'zh-cn': "飛來橫禍"
		},

		damage: 90,

		effect: {
			ja: "ダメカン2個を、相手のベンチポケモンに好きなようにのせる。",
			id: "Letakkan sejumlah 2 Token Kerusakan pada Pokémon Cadangan lawan sesukanya.",
			th: "วางตัวนับแดเมจ 2 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ",
			'zh-tw': "將2個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
			'zh-cn': "將2個傷害指示物以任意方式放置於對手的備戰寶可夢身上。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card