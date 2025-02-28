import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキex",
		id: "Roaring Moon ex",
		'zh-tw': "轟鳴月ex",
		'zh-cn': "轟鳴月ex"
	},

	illustrator: "Shinji Kanda",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "くるいえぐる",
			id: "Mengoyak Gila-gilaan",
			'zh-tw': "瘋癲攻擊",
			'zh-cn': "瘋癲攻擊"
		},

		effect: {
			ja: "相手のバトルポケモンをきぜつさせる。その後、このポケモンに200ダメージ。",
			id: "Pokémon Bertarung lawan KO. Setelah itu, berikan kerusakan sejumlah 200 kepada Pokémon ini.",
			'zh-tw': "將對手的戰鬥寶可夢【昏厥】。然後，這隻寶可夢受到200點傷害。",
			'zh-cn': "將對手的戰鬥寶可夢【昏厥】。然後，這隻寶可夢受到200點傷害。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "カラミティストーム",
			id: "Calamity Storm",
			'zh-tw': "災厄風暴",
			'zh-cn': "災厄風暴"
		},

		damage: "100+",

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、120ダメージ追加。",
			id: "Pemain dapat membuang Stadium yang ada di Arena ke Trash. Jika dilakukan, kerusakan yang diberikan bertambah sejumlah 120.",
			'zh-tw': "若希望，將場上的競技場卡丟棄。這個情況下，增加120點傷害。",
			'zh-cn': "若希望，將場上的競技場卡丟棄。這個情況下，增加120點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card