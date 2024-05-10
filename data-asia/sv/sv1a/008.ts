import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "マメバッタ",
		'zh-tw': "豆蟋蟀"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [919],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "第３の脚が 畳まれている。 ピンチになると １０メートル以上 ジャンプする 脚力を 持つ。",
		'zh-tw': "總是將第３對腳折起來。擁有在遇到危機時能夠 跳超過１０公尺的跳躍力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ちょっとはねる",
			'zh-tw': "跳一下"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "むしくい",
			'zh-tw': "蟲咬"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card