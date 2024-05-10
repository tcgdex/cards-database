import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マンキー",
		'zh-tw': "猴怪"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "木の上で 群れをつくって 暮らす。 群れから はぐれた マンキーは 寂しくて すぐに 怒りだす。",
		'zh-tw': "在樹上群居的寶可夢。和夥伴走散的猴怪會因為 按捺不住寂寞而動不動就生氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれる",
			'zh-tw': "大鬧一番"
		},

		damage: "20+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。ウラなら、このポケモンにも20ダメージ。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。若為反面，則這隻寶可夢也受到20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card