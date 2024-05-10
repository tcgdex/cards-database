import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フーディンex",
		'zh-tw': "胡地ex",
		th: "ฟูดินex",
		id: "Alakazam ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "マインドジャック",
			'zh-tw': "意志劫持",
			th: "มายด์แจ็ค",
			id: "Mind Jack"
		},

		damage: "90+",

		effect: {
			ja: "相手のベンチポケモンの数×30ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Pokémon Cadangan lawan."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ディメンションハンド",
			'zh-tw': "維度之手",
			th: "ไดเมนชันแฮนด์",
			id: "Dimension Hand"
		},

		damage: 120,

		effect: {
			ja: "このワザは、このポケモンがベンチにいても使える。",
			'zh-tw': "就算這隻寶可夢在備戰區，這個招式也可使用。",
			th: "ท่าต่อสู้นี้ แม้โปเกมอนนี้อยู่บนเบนช์ก็ใช้ได้",
			id: "Serangan ini dapat digunakan meskipun Pokémon ini ada di Cadangan."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card