import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カヌチャン",
		'zh-tw': "小鍛匠"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [957],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "手作りの ハンマーを 振りまわして 身を 守るが 金属を 食べる ポケモンには よく 奪われる。",
		'zh-tw': "雖然會揮舞著手工打造的錘子來保護自己，但卻常被 以金屬為食的寶可夢搶走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ぶんまわす",
			'zh-tw': "狂舞揮打"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card