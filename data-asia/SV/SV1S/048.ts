import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ガケガニ",
		'zh-tw': "毛崖蟹",
		th: "กาเคกานิ",
		id: "Klawf"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [950],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。",
		'zh-tw': "會倒立在懸崖上等獵物上門，但由於那會讓牠的血液倒流， 因此等不了太長的時間。",
		th: "ยืนกลับหัวและเล็งเหยื่อจากยอดหน้าผา แต่ไม่สามารถเล็งได้นานเพราะเลือดลงหัว",
		id: "Klawf mengincar mangsanya dengan bergantung secara terbalik dari atas tebing, namun tidak akan bertahan lama karena darah mengalir ke kepalanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "はさむ",
			'zh-tw': "夾住",
			th: "หนีบ",
			id: "Capitan Keras"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "アドレナハンマー",
			'zh-tw': "腎上腺錘",
			th: "อะดรีนาลีนแฮมเมอร์",
			id: "Adrenaline Hammer"
		},

		damage: 130,

		effect: {
			ja: "このポケモンをこんらんにする。",
			'zh-tw': "將這隻寶可夢【混亂】。",
			th: "ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon ini menjadi Pusing."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card