import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "アサナン",
		'zh-tw': "瑪沙那",
		th: "อาซานัน",
		id: "Meditite"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [307],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "毎日 ヨガの 修行を 欠かさない。 瞑想を することで 精神力を 高めている。",
		'zh-tw': "每天都少不了瑜珈的修行。會藉著冥想提高 自身的精神力。",
		th: "ฝึกโยคะทุกวันไม่ขาด ขัดเกลาพลังจิตให้กล้าแข็งด้วยการนั่งสมาธิ",
		id: "Meditite tidak pernah melewatkan latihan yoganya. Pokémon ini meningkatkan kekuatan mentalnya dengan bermeditasi."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "フェイント",
			'zh-tw': "佯攻",
			th: "หลอก",
			id: "Feint"
		},

		damage: 10,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			th: "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693004
	}
}

export default card