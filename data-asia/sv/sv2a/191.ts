import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴローニャex",
		'zh-tw': "隆隆岩ex",
		th: "โกโลเนียex",
		id: "Golem ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ダイナミックロール",
			'zh-tw': "極限轉動",
			th: "ไดนามิกโรล",
			id: "Dynamic Roll"
		},

		damage: 50,

		effect: {
			ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+120]",
			id: "Pada giliran sendiri berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 120."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "がんせきボンバー",
			'zh-tw': "岩石衝撞",
			th: "ระเบิดหิน",
			id: "Bom Batu"
		},

		damage: 180,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			th: "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
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