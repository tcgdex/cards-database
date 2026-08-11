import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤミラミ",
		'zh-tw': "勾魂眼",
		'th-th': "ยามิรามิ",
		'id-id': "Sableye"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	dexId: [302],
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "暗い 洞窟に 棲み処を 作り 鋭い ツメを 使って 宝石を 掘り出しては 食べる。",
		'zh-tw': "會在陰暗的洞窟裡建造住所，並用鋒利的爪子挖寶石吃。",
		'th-th': "สร้างรังอยู่ในถ้ำมืดมิด ใช้เล็บแหลมคมขุดหาอัญมณีเป็นอาหาร",
		'id-id': "Sableye membuat sarang di gua yang gelap. Pokémon ini menggunakan cakarnya yang tajam untuk menggali batu permata dan memakannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "やみのひとみ",
			'zh-tw': "暗之瞳",
			'th-th': "ดวงตามืดมิด",
			'id-id': "Mata Kegelapan"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'ja-jp': "アサシンクロー",
			'zh-tw': "刺殺爪",
			'th-th': "แอสแซสซินคลอว์",
			'id-id': "Assassin Claw"
		},

		damage: "20+",

		effect: {
			'ja-jp': "相手のバトルポケモンが特殊状態なら、70ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢處於特殊狀態，則增加70點傷害。",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะผิดปกติ การโจมตีนี้จะเพิ่มแดเมจอีก 70",
			'id-id': "Jika Pokémon Bertarung lawan mengalami Kondisi Khusus, kerusakan yang diberikan bertambah sejumlah 70."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746503,
				tcgplayer: 567522,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card