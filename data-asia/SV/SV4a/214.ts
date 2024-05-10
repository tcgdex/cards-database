import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オドリドリ",
		'zh-tw': "花舞鳥",
		id: "Oricorio"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	dexId: [741],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "情熱的に 踊るさまが パルデアの 人々の 気質に 合うのか 非常に 人気だ。",
		'zh-tw': "熱情的舞姿似乎很符合帕底亞人們的性情， 因此非常地受歡迎。",
		id: "Sosok Oricorio yang menari penuh semangat menjadi sangat populer karena cocok dengan karakteristik penduduk Daerah Paldea."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "パッションダンス",
			'zh-tw': "熱情舞",
			id: "Passion Dance"
		},

		effect: {
			ja: "自分の番に1回使える。自分のバトル場の進化ポケモンのHPを「20」回復する。",
			'zh-tw': "在自己的回合時可使用1次。將自己的戰鬥場的進化寶可夢恢復「20」HP。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pulihkan HP Pokémon Evolusi di Arena Bertarung sendiri sejumlah 20."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊",
			id: "Mengepak"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card