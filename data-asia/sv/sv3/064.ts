import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "キラーメ",
		'zh-tw': "晶光芽"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [969],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "洞窟の 壁から 栄養分を 吸収。 毒の 結晶で できた 花びらを 身にまとう。",
		'zh-tw': "會從洞窟的壁上吸取養分。包覆在身上的花瓣是用毒的結晶做成的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "どくのはへん",
			'zh-tw': "毒之碎塊"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
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