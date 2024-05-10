import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "グソクムシャ",
		'zh-tw': "具甲武者"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [768],
	hp: 140,
	types: ["Water"],

	description: {
		ja: "海底の 穴や 沈没船が すみか。 オトスパスと 戦い 負けた ほうが エサになるのだ。",
		'zh-tw': "生活在海底的洞窟或沉船裡。會去和八爪武師決戰， 輸掉的一方便會成為對方的食物。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "パワークロス",
			'zh-tw': "力量交錯"
		},

		damage: "20×",

		effect: {
			ja: "相手の手札の枚数×20ダメージ。",
			'zh-tw': "造成對手的手牌的張數×20點傷害。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "たきのぼり",
			'zh-tw': "攀瀑"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card