import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パモ",
		'zh-tw': "布撥",
		'th-th': "พาโม",
		'id-id': "Pawmi"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [921],
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "手の 肉球が 放電器官。 後ろ脚で ようやく 立ち上がると 手のひらから 電撃を 放つ。",
		'zh-tw': "手的肉球是放電的器官。會費勁地用後腳站起來， 然後從手掌釋放出電擊。",
		'th-th': "อุ้งมือคืออวัยวะปล่อยกระแสไฟฟ้า หลังจากที่ลุกขึ้นยืนด้วยขาหลังอย่างทุลักทุเลก็จะปล่อยไฟฟ้าออกมาจากอุ้งมือ",
		'id-id': "Bantalan tangannya adalah organ pelepasan listrik. Setelah berhasil berdiri dengan kaki belakangnya, Pawmi melepaskan serangan listrik dari telapak tangannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "なぐる",
			'zh-tw': "打擊",
			'th-th': "ทุบตี",
			'id-id': "Memukul"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "エレキック",
			'zh-tw': "電氣踢",
			'th-th': "ลูกเตะไฟฟ้า",
			'id-id': "Electric Kick"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693109,
				tcgplayer: 568260,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card