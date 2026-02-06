import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛天螳螂",
		ja: "ストライク"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "雙臂的大鐮刀鋒利程度堪比神兵利器。動作迅捷靈敏， 沒有獵物能逃出其指掌。",
		ja: "腕の 大きな 鎌は 切れ味 鋭く 真に 恐ろしき 得物なり。 動き 俊敏にして 獲物 逃がすことなし。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "快速攻擊",
			ja: "クイックアタック"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			ja: "コインを1回投げオモテなら、30ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [123],

	thirdParty: {
		cardmarket: 609713
	}
}

export default card