import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燭光靈",
		ja: "ヒトモシ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "頭上燃燒著的燭光讓牠的身體保持微熱。會拉著迷路孩子的手， 將他們帶向靈界。",
		ja: "炎で 熱せられた 体は ほんのり 温かい。 迷子の 手を 引き 霊界へと 誘う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小火災",
			ja: "ぼやさわぎ"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			ja: "相手の山札を上から1枚トラッシュする。"
		},

		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [607],

	thirdParty: {
		cardmarket: 609721
	}
}

export default card