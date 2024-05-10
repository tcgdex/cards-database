import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ズルッグ",
		'zh-tw': "滑滑小子",
		th: "ซึรุกกุ"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [559],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "丈夫な 皮で 身を 守る。 皮が 伸びきるとき 進化を 迎えると いわれる。",
		'zh-tw': "用結實的皮保護身體。據說在皮伸展到極限時， 牠就會開始進化。",
		th: "มีหนังที่แข็งทนทานปกป้องร่างกาย ว่ากันว่าจะเข้าสู่การวิวัฒนาการเมื่อหนังนี้ยืดเต็มที่แล้ว"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "けたぐり",
			'zh-tw': "踢倒",
			th: "เตะเรียด"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ヘッドバット",
			'zh-tw': "頭撞",
			th: "เฮดบัตต์"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card