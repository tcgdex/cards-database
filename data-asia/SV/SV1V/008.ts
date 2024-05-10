import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ワナイダーex",
		'zh-tw': "操陷蛛ex",
		th: "วาไนเดอร์ex",
		id: "Spidops ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "トラップテリトリー",
			'zh-tw': "陷阱地盤",
			th: "แดนกับดัก",
			id: "Trap Territory"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のバトルポケモンのにげるためのエネルギーは、1個ぶん多くなる。",
			'zh-tw': "只要這隻寶可夢在場上，對手的戰鬥寶可夢【撤退】所需的能量增加1個。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะเพิ่มขึ้น 1 ลูก",
			id: "Selama Pokémon ini ada di Arena, Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur bertambah 1."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ワイヤーハング",
			'zh-tw': "吊纜",
			th: "เส้นใยแขวน",
			id: "Wire Hang"
		},

		damage: "90+",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card