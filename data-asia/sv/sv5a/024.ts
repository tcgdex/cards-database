import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲコガシラ",
		'zh-tw': "呱頭蛙"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	dexId: [657],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "泡で 包んだ 小石を 投げる 技を 使う。３０メートル 先の 空き缶に 当てる コントロール。",
		'zh-tw': "會使出用泡泡包著小石頭 擲出的招式。有著能擊中 ３０公尺外空罐子的精準度。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しびれみず",
			'zh-tw': "麻麻水"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card