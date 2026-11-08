import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コイル",
		'zh-tw': "小磁怪",
		'th-th': "คอยล์",
		'id-id': "Magnemite"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "空中に 浮いたまま 移動して 左右の ユニットから 電磁波などを 放射する。",
		'zh-tw': "會浮在空中移動，從左右兩邊的組件發射 電磁波之類的東西。",
		'th-th': "ลอยและเคลื่อนที่กลางอากาศ แผ่คลื่นแม่เหล็กไฟฟ้าออกมาจากชิ้นส่วนซ้ายขวา",
		'id-id': "Magnemite berpindah sambil tetap melayang di udara. Pokémon ini memancarkan gelombang elektromagnetik dan sebagainya dari unit sisi kiri dan kanan di tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "はんぱつ",
			'zh-tw': "反抗",
			'th-th': "ดีดกลับ",
			'id-id': "Tolak-menolak"
		},

		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'ja-jp': "エレキボール",
			'zh-tw': "電球",
			'th-th': "อิเล็กทริกบอล",
			'id-id': "Electro Ball"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693101,
				tcgplayer: 568252,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card