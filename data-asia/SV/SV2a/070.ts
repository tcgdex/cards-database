import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウツドン",
		'zh-tw': "口呆花",
		th: "อุซึดง",
		id: "Weepinbell"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [70],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "まず 毒の粉を 吐き 相手の 動きを 止めてしまってから 溶解液で とどめを 刺す。",
		'zh-tw': "會先吐出有毒的粉末， 讓對手停止行動後， 再用溶解液解決對手。",
		th: "ก่อนอื่นจะพ่นผงพิษหยุดการเคลื่อนไหวของฝ่ายตรงข้ามไว้ก่อน แล้วปิดท้ายด้วยของเหลวทำละลาย",
		id: "Weepinbell terlebih dahulu menyemburkan bubuk beracun untuk menghentikan gerakan lawan, lalu menghabisinya menggunakan cairan pelebur."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬",
			th: "ตัด",
			id: "Potongan Iai"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "しるをとばす",
			'zh-tw': "噴汁",
			th: "ฉีดพ่นน้ำ",
			id: "Menyemprotkan Getah"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719512
	}
}

export default card