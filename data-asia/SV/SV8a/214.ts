import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノカシラex",
		id: "Iron Crown ex",
		'zh-tw': "鐵頭殼ex",
		'zh-cn': "鐵頭殼ex"
	},

	illustrator: "OKUBO",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "コバルトコマンド",
			id: "Cobalt Command",
			'zh-tw': "鈷藍指令",
			'zh-cn': "鈷藍指令"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の「未来」のポケモン（「テツノカシラex」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			id: "Selama Pokémon ini ada di Arena, kerusakan akibat serangan yang digunakan oleh Pokémon Futur sendiri (selain Iron Crown {ex}) kepada Pokémon Bertarung lawan bertambah sejumlah 20.",
			'zh-tw': "只要這隻寶可夢在場上，自己的「未來」寶可夢（「鐵頭殼【ex】」除外）使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。",
			'zh-cn': "只要這隻寶可夢在場上，自己的「未來」寶可夢（「鐵頭殼【ex】」除外）使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ツインショーテル",
			id: "Twin Shotel",
			'zh-tw': "雙刃劍",
			'zh-cn': "雙刃劍"
		},

		effect: {
			ja: "相手のポケモン2匹に、それぞれ50ダメージ。このワザのダメージは、弱点・抵抗力と、ダメージを受けるポケモンにかかっている効果を計算しない。",
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada 2 Pokémon lawan. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon yang menerima kerusakan.",
			'zh-tw': "對手的2隻寶可夢各受到50點傷害。這個招式的傷害不計算弱點・抵抗力與受到傷害的寶可夢身上的附加效果。",
			'zh-cn': "對手的2隻寶可夢各受到50點傷害。這個招式的傷害不計算弱點・抵抗力與受到傷害的寶可夢身上的附加效果。"
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

	retreat: 2,
	regulationMark: "H"
}

export default card