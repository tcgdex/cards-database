import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤドン",
		'zh-tw': "呆呆獸",
		'th-th': "ยาดง",
		'id-id': "Slowpoke"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	dexId: [79],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "いつも ボーッとしていて なにを 考えているか わからない。 尻尾で エサを 釣るのが 得意。",
		'zh-tw': "總是一副在發呆的樣子，不知道在想些什麼。 擅長用尾巴來釣食物。",
		'th-th': "ดูเหม่อลอยตลอดเวลา ไม่รู้ว่าคิดอะไรอยู่ ถนัดใช้หางตกเหยื่อ",
		'id-id': "Slowpoke selalu bengong dan tidak ada yang tahu apa yang sedang dipikirkannya. Pokémon ini pandai memancing makanan menggunakan ekornya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ねむる",
			'zh-tw': "睡覺",
			'th-th': "นิทรา",
			'id-id': "Tidur"
		},

		effect: {
			'ja-jp': "このポケモンをねむりにする。このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢【睡眠】。將這隻寶可夢恢復「30」HP。",
			'th-th': "ทำให้โปเกมอนนี้เป็นสภาวะ[หลับ] ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'id-id': "Ubah kondisi Pokémon ini menjadi Tidur. Pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "ずつき",
			'zh-tw': "頭錘",
			'th-th': "พุ่งหัวชน",
			'id-id': "Tandukan Kepala"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746404,
				tcgplayer: 567398,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577314,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card