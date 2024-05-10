import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コラッタ",
		'zh-tw': "小拉達",
		th: "โครัตตา",
		id: "Rattata"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [19],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "ありふれた ポケモンだが 注意。 鋭い 前歯は 堅い 材木さえ 簡単に へしおる。",
		'zh-tw': "雖然是常見的寶可夢，但還是要小心。 銳利的門牙十分堅硬， 就連木材也能輕易咬斷。",
		th: "เป็นโปเกมอนที่พบเห็นได้ทั่วไปแต่ควรระวังให้ดี ฟันหน้าที่แหลมคมนั้นสามารถงอแม้กระทั่งท่อนไม้แข็ง ๆ จนหักได้อย่างง่ายดาย",
		id: "Pokémon yang mudah dijumpai, tapi berhati-hatilah. Gigi depan tajam Rattata dapat mematahkan balok kayu keras dengan mudah."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きずをかじる",
			'zh-tw': "咬傷口",
			th: "แทะบาดแผล",
			id: "Menggerogoti Luka"
		},

		damage: "20+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card