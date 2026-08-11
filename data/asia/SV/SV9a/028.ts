import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シロナのヒンバス",
		'zh-tw': "<竹蘭的>醜醜魚",
		'zh-cn': "<竹蘭的>醜醜魚"
	},

	illustrator: "kamonabe",
	rarity: "Common",
	category: "Pokemon",
	dexId: [349],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "汚い 水も ぜんぜん 平気な タフな ポケモン。 でも ボロボロで みすぼらしいため 人気は ない。",
		'zh-tw': "即使在髒水裡也毫不介意的 堅強寶可夢。但那一副破破爛爛的 寒酸樣子並不受到歡迎。",
		'zh-cn': "即使在髒水裡也毫不介意的 堅強寶可夢。但那一副破破爛爛的 寒酸樣子並不受到歡迎。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ゆらゆらおよぐ",
			'zh-tw': "搖搖游水",
			'zh-cn': "搖搖游水"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card