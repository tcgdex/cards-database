import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "グソクムシャ",
		'zh-tw': "具甲武者",
		th: "กูโซคูมูฉะ"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [768],
	hp: 140,
	types: ["Water"],

	description: {
		ja: "海底の 穴や 沈没船が すみか。 オトスパスと 戦い 負けた ほうが エサになるのだ。",
		'zh-tw': "生活在海底的洞窟或沉船裡。會去和八爪武師決戰， 輸掉的一方便會成為對方的食物。",
		th: "อาศัยอยู่ตามรูโพรงก้นมหาสมุทรหรือเรือจม ต่อสู้กับโอโทสพัส ถ้าแพ้จะกลายเป็นเหยื่อของผู้ชนะ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "パワークロス",
			'zh-tw': "力量交錯",
			th: "พาวเวอร์ครอส"
		},

		damage: "20×",

		effect: {
			ja: "相手の手札の枚数×20ダメージ。",
			'zh-tw': "造成對手的手牌的張數×20點傷害。",
			th: "แดเมจจะเท่ากับจำนวนการ์ดบนมือฝ่ายตรงข้าม x20"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "たきのぼり",
			'zh-tw': "攀瀑",
			th: "ปีนน้ำตก"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 734249
	}
}

export default card