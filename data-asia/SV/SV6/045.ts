import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ピッピ",
		'zh-tw': "皮皮",
		th: "ปิปปี"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Sanosuke Sakuma",
	dexId: [35],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "満月の 晩に 集まって 仲間と ダンス。 その周囲は 異常な 磁場に 包まれる。",
		'zh-tw': "在月圓之夜聚集， 和夥伴一起跳舞。 周圍被異常的磁場包圍著。",
		th: "ออกมารวมตัวและเต้นกับพวกพ้องในค่ำคืนที่พระจันทร์เต็มดวง บริเวณโดยรอบนั้นจะถูกห้อมล้อมด้วยสนามแม่เหล็กที่ผิดธรรมชาติ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ムーンキック",
			'zh-tw': "月亮踢",
			th: "มูนคิก"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card