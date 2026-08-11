import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナマケロ",
		'zh-tw': "懶人獺",
		'th-th': "นามาเคโร",
		'id-id': "Slakoth"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [287],
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "１日のうち ２０時間 眠る。 見ている 相手の 眠気を 誘うのも 能力の ひとつ。",
		'zh-tw': "１天會睡上２０個小時。使看著自己的對手睡意漸濃 也是牠的能力之一。",
		'th-th': "ใน 1 วันจะนอน 20 ชั่วโมง การทำให้คนที่มองมันง่วงนอนได้ก็เป็นความสามารถอย่างหนึ่ง",
		'id-id': "Slakoth tidur 20 jam dalam 1 hari. Mengundang kantuk terhadap lawan yang melihatnya adalah salah satu kemampuan Pokémon ini."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "あくび",
			'zh-tw': "哈欠",
			'th-th': "หาว",
			'id-id': "Menguap"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705293,
				tcgplayer: 567817,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card