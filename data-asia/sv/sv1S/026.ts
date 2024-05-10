import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ラルトス",
		'zh-tw': "拉魯拉絲",
		th: "ราลท์ซ",
		id: "Ralts"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [280],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "人の 感情を 頭の 赤い ツノで 敏感に キャッチする 力を 持つ。",
		'zh-tw': "擁有使用頭上的紅角就可以敏銳察覺 人類感情的能力。",
		th: "เขาสีแดงบนหัวมีพลังในการรับรู้ความรู้สึกของคนได้อย่างละเอียดอ่อน",
		id: "Ralts memiliki kekuatan untuk menangkap emosi manusia secara sensitif dengan menggunakan tanduk merah di kepalanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコショット",
			'zh-tw': "精神射擊",
			th: "ไซโคช็อต",
			id: "Psyshot"
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

	retreat: 1,
	regulationMark: "G"
}

export default card