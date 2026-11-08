import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タイカイデン",
		'zh-tw': "大電海燕",
		'th-th': "ไทไคเด็น",
		'id-id': "Kilowattrel"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
		'zh-tw': "會膨脹喉囊來增強電力。可以乘著風在１天內 就飛上７００公里。",
		'th-th': "พองถุงคอเพื่อเพิ่มกระแสไฟฟ้า โบยบินตามสายลมเป็นระยะทาง 700 กิโลเมตรในหนึ่งวัน",
		'id-id': "Kilowattrel menggembungkan kantong tenggorokannya dan menambahkan daya listriknya. Pokémon ini menaiki angin dan terbang sejauh 700 km dalam sehari."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "つつく",
			'zh-tw': "啄",
			'th-th': "จิก",
			'id-id': "Mematuk"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ジェットウイング",
			'zh-tw': "噴射之翼",
			'th-th': "เจ็ตวิง",
			'id-id': "Jet Wing"
		},

		damage: 150,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
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
				cardmarket: 701087,
				tcgplayer: 568156,
			},
		},
	],

	retreat: 0,
	regulationMark: "G"
}

export default card