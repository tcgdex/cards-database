import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "キュウコン",
		'zh-tw': "九尾"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [38],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "黄金に 輝く 体毛と ９本の 長い 尻尾を 持つ。 １０００年は 生きると 言われる。",
		'zh-tw': "擁有金光閃閃的體毛 以及９根長長的尾巴。 據說壽命長達１０００年。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "あやしいともしび",
			'zh-tw': "奇異燈火"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをやけどとこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】與【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card