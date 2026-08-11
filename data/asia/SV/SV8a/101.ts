import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "トドロクツキex",
		'id-id': "Roaring Moon ex",
		'th-th': "จันทร์คำรนex",
		'zh-tw': "轟鳴月ex",
		'zh-cn': "轟鳴月ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'ja-jp': "くるいえぐる",
			'id-id': "Mengoyak Gila-gilaan",
			'th-th': "วิปลาสเจาะทะลวง",
			'zh-tw': "瘋癲攻擊",
			'zh-cn': "瘋癲攻擊"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをきぜつさせる。その後、このポケモンに200ダメージ。",
			'id-id': "Pokémon Bertarung lawan KO. Setelah itu, berikan kerusakan sejumlah 200 kepada Pokémon ini.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ] หลังจากนั้น ทำแดเมจ 200 กับโปเกมอนนี้",
			'zh-tw': "將對手的戰鬥寶可夢【昏厥】。然後，這隻寶可夢受到200點傷害。",
			'zh-cn': "將對手的戰鬥寶可夢【昏厥】。然後，這隻寶可夢受到200點傷害。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'ja-jp': "カラミティストーム",
			'id-id': "Calamity Storm",
			'th-th': "คาลามิตี้สตอร์ม",
			'zh-tw': "災厄風暴",
			'zh-cn': "災厄風暴"
		},

		damage: "100+",

		effect: {
			'ja-jp': "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、120ダメージ追加。",
			'id-id': "Pemain dapat membuang Stadium yang ada di Arena ke Trash. Jika dilakukan, kerusakan yang diberikan bertambah sejumlah 120.",
			'th-th': "หากต้องการ ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด เมื่อทำเช่นนั้นแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			'zh-tw': "若希望，將場上的競技場卡丟棄。這個情況下，增加120點傷害。",
			'zh-cn': "若希望，將場上的競技場卡丟棄。這個情況下，增加120點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 803214,
				tcgplayer: 602495,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card