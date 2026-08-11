import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヘルガー",
		'zh-tw': "黑魯加",
		'th-th': "เฮลการ์",
		'id-id': "Houndoom"
	},

	illustrator: "hncl",
	rarity: "Common",
	category: "Pokemon",
	dexId: [229],
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "不気味な 遠吠えを 聞いた ポケモンは 震え 一目散に 自分の 巣に 戻る。",
		'zh-tw': "聽見牠恐怖長嚎的寶可夢會渾身發抖， 一溜煙地回到自己的巢裡。",
		'th-th': "โปเกมอนที่ได้ยินเสียงหอนชวนขนลุกของมันจะสั่นกลัวและรีบกลับรังของตนอย่างรวดเร็ว",
		'id-id': "Pokémon yang mendengar suara lolongan menyeramkan Houndoom bergetar ketakutan dan langsung kembali ke sarang secepatnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "するどいキバ",
			'zh-tw': "銳利之牙",
			'th-th': "เขี้ยวคม",
			'id-id': "Taring Tajam"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "だいもんじ",
			'zh-tw': "大字爆炎",
			'th-th': "เพลิงอัคคี",
			'id-id': "Ledakan Api Besar"
		},

		damage: 150,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693092,
				tcgplayer: 568244,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card