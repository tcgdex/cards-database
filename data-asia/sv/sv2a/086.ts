import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "パウワウ"
	},

	illustrator: "aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [86],
	hp: 80,
	types: ["Water"],

	description: {
		ja: "分厚い 脂肪の おかげで 寒い 海も へっちゃらだけど 暖かい 海では ちょっと バテやすいのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ひんやり"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card