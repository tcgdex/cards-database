import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのウッウ",
		'zh-tw': "赫普的古月鳥",
		'zh-cn': "赫普的古月鳥"
	},

	illustrator: "Saboteri",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [845],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "なんでも 丸飲みする 習性。 大きすぎる 獲物を 詰まらせて 困っている ウッウほど 手強い。",
		'zh-tw': "擁有大口吞下任何東西的習性。 越是為著喉嚨卡的過大獵物而 煩惱的古月鳥，越是難以對付。",
		'zh-cn': "擁有大口吞下任何東西的習性。 越是為著喉嚨卡的過大獵物而 煩惱的古月鳥，越是難以對付。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きまぐれスピット",
			'zh-tw': "浮躁噴吐",
			'zh-cn': "浮躁噴吐"
		},

		damage: 120,

		effect: {
			ja: "相手のサイドの残り枚数が4枚・3枚でないなら、このワザは失敗。",
			'zh-tw': "若對手剩餘獎賞卡的張數不是4張・3張，則這個招式失敗。",
			'zh-cn': "若對手剩餘獎賞卡的張數不是4張・3張，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card