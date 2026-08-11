import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アルクジラ",
		'zh-tw': "走鯨",
		'th-th': "อารุคุจิระ",
		'id-id': "Cetoddle"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [974],
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "遥か 昔に 海から 上がって 陸地で 暮らすようになった。 ホエルコに 近い 種類らしい。",
		'zh-tw': "遠古時代自大海上岸後，就開始在陸地上生活。 似乎與吼吼鯨是相近的物種。",
		'th-th': "ขึ้นจากทะเลมาอาศัยอยู่บนบกตั้งแต่อดีตอันไกลโพ้น ดูเหมือนว่าจะเป็นสายพันธุ์ใกล้เคียงกับเวลโกะ",
		'id-id': "Pada zaman dahulu, Cetoddle naik dari laut dan hidup di daratan. Tampaknya spesies Pokémon ini dekat dengan Wailmer."
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
			'ja-jp': "このポケモンをねむりにする。このポケモンのHPを「60」回復する。",
			'zh-tw': "將這隻寶可夢【睡眠】。將這隻寶可夢恢復「60」HP。",
			'th-th': "ทำให้โปเกมอนนี้เป็นสภาวะ[หลับ] ฟื้นฟู HP ของโปเกมอนนี้ [60]",
			'id-id': "Ubah kondisi Pokémon ini menjadi Tidur. Pulihkan HP Pokémon ini sejumlah 60."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "すてみタックル",
			'zh-tw': "捨身衝撞",
			'th-th': "กระแทกสุดแรง",
			'id-id': "Serudukan Nekat"
		},

		damage: 50,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705254,
				tcgplayer: 567778,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card