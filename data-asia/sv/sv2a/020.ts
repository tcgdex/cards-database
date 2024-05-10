import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッタ",
		'zh-tw': "拉達",
		th: "รัตตา",
		id: "Raticate"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [20],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "ヒゲは バランスを とる 大切な 器官。 どんなに 仲良くなっても 触られると 怒って 噛みつく。",
		'zh-tw': "鬍鬚是用來保持平衡的重要器官。 就算感情再好，如果摸了牠的鬍鬚， 牠都會生氣地咬過來。",
		th: "หนวดเป็นอวัยวะสำคัญสำหรับรักษาสมดุล ไม่ว่าจะสนิทแค่ไหน ถ้าไปแตะถูกหนวดล่ะก็ มันจะโกรธและกัดงับเข้าให้",
		id: "Kumis Raticate adalah organ penting untuk menjaga keseimbangan. Walau seakrab apa pun dengannya, ia akan marah dan menggigit jika disentuh kumisnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きずにかみつく",
			'zh-tw': "咬住傷口",
			th: "กัดติดบาดแผล",
			id: "Menggigit Luka"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card