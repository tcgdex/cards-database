import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "シビシラス",
		'zh-tw': "麻麻小魚",
		th: "ชิบิชิราซึ"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [602],
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "１匹の 電力は 小さいが たくさんの シビシラスが つながると 雷と 同じ 威力になる。",
		'zh-tw': "１隻的電力雖小，但只要多隻麻麻小魚聚集在一起，威力便可媲美雷電。",
		th: "พลังไฟฟ้าต่อ 1 ตัวมีไม่มากนัก แต่ถ้าชิบิชิราซึหลาย ๆ ตัวรวมพลังกัน พลังไฟฟ้าจะรุนแรงเทียบเท่าฟ้าผ่าเลย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "バチバチ",
			'zh-tw': "劈哩啪啦",
			th: "ประกายไฟ"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "プチボルト",
			'zh-tw': "小伏特",
			th: "โวลต์ต่ำ"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card