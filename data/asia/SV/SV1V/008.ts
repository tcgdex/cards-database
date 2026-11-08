import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ワナイダーex",
		'zh-tw': "操陷蛛ex",
		'th-th': "วาไนเดอร์ex",
		'id-id': "Spidops ex"
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
			'ja-jp': "トラップテリトリー",
			'zh-tw': "陷阱地盤",
			'th-th': "แดนกับดัก",
			'id-id': "Trap Territory"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、相手のバトルポケモンのにげるためのエネルギーは、1個ぶん多くなる。",
			'zh-tw': "只要這隻寶可夢在場上，對手的戰鬥寶可夢【撤退】所需的能量增加1個。",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะเพิ่มขึ้น 1 ลูก",
			'id-id': "Selama Pokémon ini ada di Arena, Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur bertambah 1."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "ワイヤーハング",
			'zh-tw': "吊纜",
			'th-th': "เส้นใยแขวน",
			'id-id': "Wire Hang"
		},

		damage: "90+",

		effect: {
			'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693082,
				tcgplayer: 568234,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card