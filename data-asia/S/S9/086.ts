import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇諾栗鼠",
		ja: "チラチーノ"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "潔癖使得牠連一絲灰塵都無法容忍，會把自己身上 滲出的油塗在巢上保持清潔。",
		ja: "塵ひとつ 許せない 潔癖。 体から 染み出る 油を 巣に 塗りつけ コーティングする。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "巴掌",
			ja: "ビンタ"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "三旋擊",
			ja: "トリプルアクセル"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×50點傷害。",
			ja: "コインを3回投げ、オモテの数×50ダメージ。"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [573],

	thirdParty: {
		cardmarket: 605937
	}
}

export default card