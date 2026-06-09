import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴマゾウ",
		'zh-tw': "小小象",
		'zh-cn': "小小象"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "見た目より ずっと 力持ち。 振りまわす 鼻に ぶつかると 腕の 骨が もっていかれる。",
		'zh-tw': "有別於外表的大力士。 如果被牠甩動的鼻子揮中， 手臂的骨頭就會支離破碎。",
		'zh-cn': "有別於外表的大力士。 如果被牠甩動的鼻子揮中， 手臂的骨頭就會支離破碎。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘",
			'zh-cn': "頭錘"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793498
	}
}

export default card