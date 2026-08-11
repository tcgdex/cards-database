import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒトカゲ",
		'zh-tw': "小火龍",
		'th-th': "ฮิโตคาเงะ",
		'id-id': "Charmander"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "生まれたときから しっぽに 炎が ともっている。 炎が 消えたとき その 命は 終わって しまう。",
		'zh-tw': "從出生時開始尾巴上就有火焰在燃燒。 火焰熄滅時，生命也會結束。",
		'th-th': "มีหางที่ติดไฟตั้งแต่เกิด หากไฟดับนั่นหมายถึงการจบชีวิต",
		'id-id': "Sejak lahir, api menyala di ekor Charmander. Hidupnya akan berakhir saat api tersebut padam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "まるやけ",
			'zh-tw': "全部燒光",
			'th-th': "เผาเตียน",
			'id-id': "Bakar Bulat-bulat"
		},

		effect: {
			'ja-jp': "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。",
			'th-th': "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang Stadium yang ada di Arena ke Trash."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "ひをはく",
			'zh-tw': "吐火",
			'th-th': "พ่นอัคคี",
			'id-id': "Memuntahkan Api"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746227,
				tcgplayer: 567381,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577308,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card