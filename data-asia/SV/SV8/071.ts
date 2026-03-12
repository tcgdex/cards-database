import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ジヘッド",
		'zh-tw': "雙首暴龍",
		'zh-cn': "雙首暴龍"
	},

	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [634],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "２つの 頭は 好みが 違う。 頭同士 争うことで だれの 力も 借りずに 強くなるのだ。",
		'zh-tw': "２顆頭各有喜好。 由於頭之間會互相爭鬥， 因此不靠外力也能變強。",
		'zh-cn': "２顆頭各有喜好。 由於頭之間會互相爭鬥， 因此不靠外力也能變強。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ふみならす",
			'zh-tw': "踩落",
			'zh-cn': "踩落"
		},

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。",
			'zh-cn': "將對手的牌庫上方2張卡丟棄。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "やみのキバ",
			'zh-tw': "暗之牙",
			'zh-cn': "暗之牙"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793505
	}
}

export default card