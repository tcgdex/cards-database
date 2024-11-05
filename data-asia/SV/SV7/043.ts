import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小仙奶",
		'zh-cn': "小仙奶",
		ja: "マホミル"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "遭到襲擊時，會全身撞向對手， 趁著對方沾滿鮮奶油而看不見前方， 或因奶油的美味而愣住時迅速逃跑。",
		'zh-cn': "遭到襲擊時，會全身撞向對手， 趁著對方沾滿鮮奶油而看不見前方， 或因奶油的美味而愣住時迅速逃跑。",
		ja: "敵に 襲われたら たいあたり。 クリームまみれにして みえなくするか おいしさに 驚かせて 逃げだす。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "囈語",
			'zh-cn': "囈語",
			ja: "つぶやく"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [868]
}

export default card