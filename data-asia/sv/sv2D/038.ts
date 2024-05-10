import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ドジョッチ",
		'zh-tw': "泥泥鰍"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [339],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "２本のヒゲは 敏感なレーダー。 泥で 濁った 水の 中でも 獲物の 位置を 察知するぞ。",
		'zh-tw': "２根鬍子是靈敏的雷達。即使在因為泥濘而渾濁的水中， 也能偵查到獵物的位置。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かくれる",
			'zh-tw': "躲藏"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "どろかけ",
			'zh-tw': "擲泥"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card