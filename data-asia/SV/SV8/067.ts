import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "キラーメ",
		'zh-tw': "晶光芽",
		'zh-cn': "晶光芽"
	},

	illustrator: "Eri Kamei",
	rarity: "Common",
	category: "Pokemon",
	dexId: [969],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "毒成分の 結晶が まるで 花びらに 見える。 花粉のように 毒の粉を ばらまき 身を守る。",
		'zh-tw': "以毒構成的結晶看似花瓣。 會如灑花粉般地灑出毒粉 來保護自身安全。",
		'zh-cn': "以毒構成的結晶看似花瓣。 會如灑花粉般地灑出毒粉 來保護自身安全。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわとばし",
			'zh-tw': "岩石投擲",
			'zh-cn': "岩石投擲"
		},

		damage: 10,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			'zh-cn': "這個招式的傷害不計算抵抗力。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card