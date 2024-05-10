import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ダブラン",
		'zh-tw': "雙卵細胞球",
		th: "ดาบูลัน"
	},

	illustrator: "mele",
	rarity: "Common",
	category: "Pokemon",
	dexId: [578],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "２つの 脳みその 意見が 一致したときの 念力は 周囲１キロに およぶと いう。",
		'zh-tw': "據說當牠的２個大腦意見一致時，發出的念力 可以覆蓋方圓１公里的範圍。",
		th: "พลังจิตในตอนที่ความเห็นของสมองทั้งสองเหมือนกันจะมีพลังกระจายไปได้ถึง 1 กิโลเมตรโดยรอบ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルトリック",
			'zh-tw': "雙重戲法",
			th: "ดับเบิลทริก"
		},

		damage: "30×",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card