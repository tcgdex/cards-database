import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドリーノ",
		'zh-tw': "尼多力諾",
		th: "นิโดริโน",
		id: "Nidorino"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [33],
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "神経質で 喧嘩っ早い。 体内の アドレナリンが 増えると 毒素の 濃度も 高まるぞ。",
		'zh-tw': "神經質且容易發脾氣打架。當體內的腎上腺素增加時， 毒素的濃度也會提升。",
		th: "หงุดหงิดขี้กังวล แค่เรื่องนิดหน่อยก็ชวนทะเลาะ หากอะดรีนาลีนในร่างกายเพิ่มสูงขึ้น ความเข้มข้นของพิษก็จะสูงขึ้นไปด้วย",
		id: "Nidorino mudah tersinggung dan suka berkelahi. Ketika adrenalin di dalam tubuhnya bertambah, kepekatan unsur racunnya pun meningkat."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม",
			id: "Taring Tajam"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "かいりきホーン",
			'zh-tw': "怪力角擊",
			th: "เขามหากาฬ",
			id: "Tanduk Tenaga Super"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719475
	}
}

export default card