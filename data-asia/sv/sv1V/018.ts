import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘルガー",
		'zh-tw': "黑魯加",
		th: "เฮลการ์",
		id: "Houndoom"
	},

	illustrator: "hncl",
	rarity: "Common",
	category: "Pokemon",
	dexId: [229],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "不気味な 遠吠えを 聞いた ポケモンは 震え 一目散に 自分の 巣に 戻る。",
		'zh-tw': "聽見牠恐怖長嚎的寶可夢會渾身發抖， 一溜煙地回到自己的巢裡。",
		th: "โปเกมอนที่ได้ยินเสียงหอนชวนขนลุกของมันจะสั่นกลัวและรีบกลับรังของตนอย่างรวดเร็ว",
		id: "Pokémon yang mendengar suara lolongan menyeramkan Houndoom bergetar ketakutan dan langsung kembali ke sarang secepatnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม",
			id: "Taring Tajam"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "だいもんじ",
			'zh-tw': "大字爆炎",
			th: "เพลิงอัคคี",
			id: "Ledakan Api Besar"
		},

		damage: 150,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card