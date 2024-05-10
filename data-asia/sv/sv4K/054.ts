import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキex",
		'zh-tw': "轟鳴月ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "くるいえぐる",
			'zh-tw': "瘋癲攻擊"
		},

		effect: {
			ja: "相手のバトルポケモンをきぜつさせる。その後、このポケモンに200ダメージ。",
			'zh-tw': "將對手的戰鬥寶可夢【昏厥】。然後，這隻寶可夢受到200點傷害。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "カラミティストーム",
			'zh-tw': "災厄風暴"
		},

		damage: "100+",

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、120ダメージ追加。",
			'zh-tw': "若希望，將場上的競技場卡丟棄。這個情況下，增加120點傷害。"
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