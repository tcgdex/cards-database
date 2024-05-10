import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギバナex",
		'zh-tw': "妙蛙花ex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "やすらぎのはな",
			'zh-tw': "平和之花"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分のポケモン1匹のHPを「60」回復する。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。將自己的1隻寶可夢恢復「60」HP。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "もうどくウィップ",
			'zh-tw': "劇毒鞭打"
		},

		damage: 150,

		effect: {
			ja: "相手のバトルポケモンをどくとこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card