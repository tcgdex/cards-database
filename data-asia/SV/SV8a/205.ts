import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "シャワーズex",
		id: "Vaporeon ex",
		'zh-tw': "水伊布ex",
		'zh-cn': "水伊布ex"
	},

	illustrator: "Narano",
	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ヘビースコール",
			id: "Heavy Squall",
			'zh-tw': "重磅驟雨",
			'zh-cn': "重磅驟雨"
		},

		effect: {
			ja: "相手の「ポケモンex」全員に、それぞれ60ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 60 kepada semua Pokémon {ex} lawan. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan dan Resistansi.",
			'zh-tw': "對手的所有「寶可夢【ex】」各受到60點傷害。這個招式的傷害不計算弱點・抵抗力。",
			'zh-cn': "對手的所有「寶可夢【ex】」各受到60點傷害。這個招式的傷害不計算弱點・抵抗力。"
		}
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			ja: "アクアマリン",
			id: "Aquamarine",
			'zh-tw': "海藍寶石",
			'zh-cn': "海藍寶石"
		},

		damage: 280,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card