import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄飄雛",
		'zh-cn': "飄飄雛",
		ja: "ヒラヒナ"
	},

	illustrator: "buchi",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		'zh-tw': "會在荒地跑來跑去生活。 如果最喜歡的樹果被搶走， 就會窮追不捨地展開報復。",
		'zh-cn': "會在荒地跑來跑去生活。 如果最喜歡的樹果被搶走， 就會窮追不捨地展開報復。",
		ja: "荒れ地を 走りまわって 暮らす。 大好きな 木の実を 取られると 追いかけまわして 復讐する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "躍起閃避",
			'zh-cn': "躍起閃避",
			ja: "はねてかわす"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [955]
}

export default card