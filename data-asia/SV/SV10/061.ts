import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>尼多朗",
		'zh-cn': "<火箭隊的>尼多朗",
		ja: "ロケット団のニドラン♂"
	},

	illustrator: "buchi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "體型嬌小，但性情勇猛。 為了保護感情好的雌性， 會奮不顧身地勇敢戰鬥。",
		'zh-cn': "體型嬌小，但性情勇猛。 為了保護感情好的雌性， 會奮不顧身地勇敢戰鬥。",
		ja: "小柄だが 勇ましい 性質。 仲良しの メスを 守るため 身を ていして 果敢に 戦う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突刺",
			'zh-cn': "突刺",
			ja: "つきさす"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "頭突",
			'zh-cn': "頭突",
			ja: "ぶちかます"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [32]
}

export default card