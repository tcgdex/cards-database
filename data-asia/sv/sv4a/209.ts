import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "シガロコ",
		'zh-tw': "蟲滾泥",
		id: "Rellor"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	dexId: [953],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "エスパーエネルギーを 混ぜこみながら 土と 砂で 泥玉を 作る。 泥玉は 命より 大切。",
		'zh-tw': "會將超能力混進泥土和沙子裡製作出泥球。 泥球比自己的命還重要。",
		id: "Rellor membuat bola lumpur dengan tanah dan pasir sambil mencampurkan energi psikokinesisnya. Bola lumpur tersebut lebih penting daripada nyawanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たまころがり",
			'zh-tw': "滾球",
			id: "Menggelindingkan Bola"
		},

		damage: "30×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。",
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card