import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピカチュウex",
		id: "Pikachu ex",
		'zh-tw': "皮卡丘ex",
		'zh-cn': "皮卡丘ex"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "がんばりハート",
			id: "Hati Pejuang",
			'zh-tw': "‌‌勤奮之心",
			'zh-cn': "‌‌勤奮之心"
		},

		effect: {
			ja: "このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、きぜつせず、残りHPが「10」の状態で場に残る。",
			id: "Saat Pokémon ini KO karena menerima kerusakan akibat serangan ketika HP Pokémon ini masih penuh, Pokémon ini tidak KO dan tetap berada di Arena dengan kondisi sisa HP sejumlah 10.",
			'zh-tw': "‌這隻寶可夢的HP是全滿的狀態下，這隻寶可夢受到招式的傷害而【昏厥】時，這隻寶可夢不會【昏厥】，而是以剩餘HP為「10」的狀態留在場上。",
			'zh-cn': "‌這隻寶可夢的HP是全滿的狀態下，這隻寶可夢受到招式的傷害而【昏厥】時，這隻寶可夢不會【昏厥】，而是以剩餘HP為「10」的狀態留在場上。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Lightning", "Metal"],

		name: {
			ja: "トパーズボルト",
			id: "Topaz Bolt",
			'zh-tw': "黃玉伏特",
			'zh-cn': "黃玉伏特"
		},

		damage: 300,

		effect: {
			ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
			id: "Pilih 3 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card