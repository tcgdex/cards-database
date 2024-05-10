import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "フーパex",
		'zh-tw': "胡帕ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "エナジークラッシュ",
			'zh-tw': "能量粉碎"
		},

		damage: "50×",

		effect: {
			ja: "相手のポケモン全員についているエネルギーの数×50ダメージ。",
			'zh-tw': "造成對手的所有寶可夢身上附加的能量的數量×50點傷害。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			ja: "バンデットフィスト",
			'zh-tw': "狂徒拳"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンは「バンデットフィスト」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「狂徒拳」。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card