import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ラルトス",
		'zh-tw': "拉魯拉絲",
		'th-th': "ราลทซ์",
		'id-id': "Ralts"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	dexId: [280],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "人の 感情を 頭の 赤い ツノで 敏感に キャッチする 力を 持つ。",
		'zh-tw': "擁有使用頭上的紅角就可以敏銳察覺 人類感情的能力。",
		'th-th': "เขาสีแดงบนหัวมีพลังในการรับรู้ความรู้สึกของคนได้อย่างละเอียดอ่อน",
		'id-id': "Ralts memiliki kekuatan untuk menangkap emosi manusia secara sensitif dengan menggunakan tanduk merah di kepalanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "サイコショット",
			'zh-tw': "精神射擊",
			'th-th': "ไซโคช็อต",
			'id-id': "Psyshot"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746462,
				tcgplayer: 567473,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577340,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card