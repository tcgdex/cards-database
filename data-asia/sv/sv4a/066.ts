import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パモ",
		'zh-tw': "布撥",
		th: "พาโม",
		id: "Pawmi"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	dexId: [921],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "手の 肉球が 放電器官。 後ろ脚で ようやく 立ち上がると 手のひらから 電撃を 放つ。",
		'zh-tw': "手的肉球是放電的器官。會費勁地用後腳站起來， 然後從手掌釋放出電擊。",
		th: "อุ้งมือคืออวัยวะปล่อยกระแสไฟฟ้า หลังจากที่ลุกขึ้นยืนด้วยขาหลังอย่างทุลักทุเลก็จะปล่อยไฟฟ้าออกมาจากอุ้งมือ",
		id: "Bantalan tangannya adalah organ pelepasan listrik. Setelah berhasil berdiri dengan kaki belakangnya, Pawmi melepaskan serangan listrik dari telapak tangannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なぐる",
			'zh-tw': "打擊",
			th: "ทุบตี",
			id: "Memukul"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "エレキック",
			'zh-tw': "電氣踢",
			th: "ลูกเตะไฟฟ้า",
			id: "Electric Kick"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card