import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ディンルーex",
		'zh-tw': "古鼎鹿ex",
		'th-th': "ติ่งลู่ex",
		'id-id': "Ting-Lu ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "じゅばくのだいち",
			'zh-tw': "咒縛大地",
			'th-th': "ธรณีต้องสาป",
			'id-id': "Daratan Pengikat Kutukan"
		},

		effect: {
			'ja-jp': "このポケモンがバトル場にいるかぎり、相手の場のダメカンがのっているポケモン（ポケモンexをのぞく）の特性は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手場上的身上放置有傷害指示物的寶可夢（寶可夢【ex】除外）的特性全部消除。",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ความสามารถของโปเกมอนบนกระดานฝ่ายตรงข้ามที่มีตัวนับแดเมจวางอยู่ (ยกเว้นโปเกมอน【ex】) ทั้งหมดจะหายไป",
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, Pokémon yang memiliki Token Kerusakan (selain Pokémon {ex}) di Arena lawan menjadi tidak memiliki Ability."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'ja-jp': "ランドスクープ",
			'zh-tw': "大地掬弄",
			'th-th': "คว้านพสุธา",
			'id-id': "Land Scoop"
		},

		damage: 150,

		effect: {
			'ja-jp': "相手のベンチポケモン1匹に、ダメカンを2個のせる。",
			'zh-tw': "在對手的1隻備戰寶可夢身上放置2個傷害指示物。",
			'th-th': "วางตัวนับแดเมจ 2 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว",
			'id-id': "Letakkan 2 Token Kerusakan pada 1 Pokémon Cadangan lawan."
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
				cardmarket: 705353,
				tcgplayer: 565911,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card