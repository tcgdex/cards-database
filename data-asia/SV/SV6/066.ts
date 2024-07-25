import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ポチエナ",
		'zh-tw': "土狼犬",
		th: "โปชิเอนา"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Shibuzoh.",
	dexId: [261],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "群れで 獲物を 追いかけまわす。 疲れきったところを 仕留めるが たまに 反撃されて 逃げだす。",
		'zh-tw': "會成群追擊獵物，並在其 筋疲力盡時給予致命一擊， 但有時會因遭到反擊而逃走。",
		th: "ไล่ตามเหยื่อกันเป็นฝูง จะจัดการเหยื่อตอนที่เหยื่อเหนื่อย แต่บางครั้งก็จะหนีไปเมื่อโดนเหยื่อโต้กลับ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "れんぞくステップ",
			'zh-tw': "連續舞步",
			th: "สเต็ปต่อเนื่อง"
		},

		damage: "10×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "やみのキバ",
			'zh-tw': "暗之牙",
			th: "เขี้ยวแห่งความมืด"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card