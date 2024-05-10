import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "クエスパトラex",
		'zh-tw': "超能豔鴕ex"
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
			ja: "まばゆいしせん",
			'zh-tw': "奪目視線"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、ワザを使うためのエネルギーが、エネルギー1個ぶん多くなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢使用招式所需的能量增加1個【無】能量。"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコボール",
			'zh-tw': "精神球"
		},

		damage: "30+",

		effect: {
			ja: "おたがいのバトルポケモンについているエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加雙方的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card