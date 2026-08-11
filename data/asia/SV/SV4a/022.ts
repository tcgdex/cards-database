import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シガロコ",
		'zh-tw': "蟲滾泥",
		'th-th': "ชิกาโรโค",
		'id-id': "Rellor"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	dexId: [953],
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "エスパーエネルギーを 混ぜこみながら 土と 砂で 泥玉を 作る。 泥玉は 命より 大切。",
		'zh-tw': "會將超能力混進泥土和沙子裡製作出泥球。 泥球比自己的命還重要。",
		'th-th': "สร้างก้อนโคลนจากดินและทรายผสมพลังงานพลังจิต ให้ความสำคัญกับก้อนโคลนยิ่งกว่าชีวิต",
		'id-id': "Rellor membuat bola lumpur dengan tanah dan pasir sambil mencampurkan energi psikokinesisnya. Bola lumpur tersebut lebih penting daripada nyawanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "たまころがり",
			'zh-tw': "滾球",
			'th-th': "กลิ้งบอล",
			'id-id': "Menggelindingkan Bola"
		},

		damage: "30×",

		effect: {
			'ja-jp': "ウラが出るまでコインを投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。",
			'th-th': "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746224,
				tcgplayer: 567375,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577307,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card