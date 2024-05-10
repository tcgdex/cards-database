import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ディンルーex",
		'zh-tw': "古鼎鹿ex",
		th: "ติ่งลู่ex",
		id: "Ting-Lu ex"
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
			ja: "じゅばくのだいち",
			'zh-tw': "咒縛大地",
			th: "ธรณีต้องสาป",
			id: "Daratan Pengikat Kutukan"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手の場のダメカンがのっているポケモン（ポケモンexをのぞく）の特性は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手場上的身上放置有傷害指示物的寶可夢（寶可夢【ex】除外）的特性全部消除。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ความสามารถของโปเกมอนบนกระดานฝ่ายตรงข้ามที่มีตัวนับแดเมจวางอยู่ (ยกเว้นโปเกมอน【ex】) ทั้งหมดจะหายไป",
			id: "Selama Pokémon ini ada di Arena Bertarung, Pokémon yang memiliki Token Kerusakan (selain Pokémon ex) di Arena lawan menjadi tidak memiliki Ability."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ランドスクープ",
			'zh-tw': "大地掬弄",
			th: "คว้านพสุธา",
			id: "Land Scoop"
		},

		damage: 150,

		effect: {
			ja: "相手のベンチポケモン1匹に、ダメカンを2個のせる。",
			'zh-tw': "在對手的1隻備戰寶可夢身上放置2個傷害指示物。",
			th: "วางตัวนับแดเมจ 2 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว",
			id: "Letakkan 2 Token Kerusakan pada 1 Pokémon Cadangan lawan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card