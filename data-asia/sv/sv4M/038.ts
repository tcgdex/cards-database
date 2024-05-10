import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノブジンex",
		'zh-tw': "鐵武者ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "タキオンビット",
			'zh-tw': "超光速位元"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。相手のポケモン1匹に、ダメカンを2個のせる。",
			'zh-tw': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "レーザーブレード",
			'zh-tw': "鐳射利刃"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card