import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "テツノワダチex",
		'zh-tw': "鐵轍跡ex",
		'th-th': "รอยล้อเหล็กex",
		'id-id': "Iron Treads ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "トリプルレーザー",
			'zh-tw': "三重鐳射",
			'th-th': "ทริปเปิลเลเซอร์",
			'id-id': "Triple Laser"
		},

		effect: {
			'ja-jp': "相手のポケモン3匹に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的3隻寶可夢各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'th-th': "โปเกมอนฝ่ายตรงข้าม 3 ตัว จะได้รับแดเมจตัวละ 30 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini memberikan kerusakan masing-masing sejumlah 30 kepada 3 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'ja-jp': "サイバネホイール",
			'zh-tw': "控制輪",
			'th-th': "ไซเบอร์เนติกวีล",
			'id-id': "Cybernetics Wheel"
		},

		damage: 160,

		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693133,
				tcgplayer: 568284,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card