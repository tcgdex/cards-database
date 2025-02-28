import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ダンバル",
		id: "Beldum",
		th: "ดันบัล",
		'zh-tw': "鐵啞鈴",
		'zh-cn': "鐵啞鈴"
	},

	illustrator: "hatachu",
	rarity: "None",
	category: "Pokemon",
	dexId: [374],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "磁力を お尻から 発生させ 敵を 勢いよく 吸いよせて 鋭い ツメで 串刺しにする。",
		id: "Beldum menghasilkan kekuatan magnet dari bagian belakang tubuhnya untuk mengisap musuh mendekat dengan kuat lalu menusuknya hingga tembus dengan cakarnya yang tajam.",
		th: "ปล่อยอำนาจแม่เหล็กออกมาทางก้น ดูดเอาศัตรูให้พุ่งเข้าหาและเสียบทะลุด้วยกรงเล็บอันแหลมคม",
		'zh-tw': "會從臀部放出磁力 將敵人迅猛地吸到身邊， 再以銳利的爪子刺穿對方。",
		'zh-cn': "會從臀部放出磁力 將敵人迅猛地吸到身邊， 再以銳利的爪子刺穿對方。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "ツメをたてる",
			id: "Memasang Cakar",
			th: "กางกรงเล็บ",
			'zh-tw': "豎爪",
			'zh-cn': "豎爪"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "アイアンタックル",
			id: "Iron Tackle",
			th: "ไอออนแท็กเกิล",
			'zh-tw': "鐵之衝撞",
			'zh-cn': "鐵之衝撞"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'zh-cn': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card