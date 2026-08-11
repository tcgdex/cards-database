import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アノホラグサ",
		'zh-tw': "怖納噬草",
		'th-th': "อาโนะโฮรากุสะ",
		'id-id': "Brambleghast"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [947],
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "頭の 枝を 開いて 獲物を 飲みこむ。 生気を 存分に 吸い取ると 吐き出して 捨てるのだ。",
		'zh-tw': "會張開頭的樹枝吞沒獵物。把精氣吸得淋漓盡致後， 就會吐出來丟掉。",
		'th-th': "เปิดกิ่งก้านบนหัวเพื่อกลืนกินเหยื่อลงไป เมื่อสูบพลังชีวิตของอีกฝ่ายไปเต็มที่แล้วก็จะคายทิ้ง",
		'id-id': "Brambleghast membuka ranting di kepalanya dan menelan bulat-bulat mangsanya. Pokémon ini memuntahkan dan membuang mangsanya begitu saja setelah mengisap habis vitalitasnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "いのちをすいとる",
			'zh-tw': "生命吸取",
			'th-th': "ดูดซับพลังชีวิต",
			'id-id': "Menyerap Nyawa"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "かれきのろうごく",
			'zh-tw': "枯木牢獄",
			'th-th': "เรือนจำซากไม้",
			'id-id': "Penjara Pohon Kering"
		},

		damage: 80,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーが、エネルギー2個ぶん多くなる。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量增加2個【無】能量。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ พลังงานสำหรับใช้ท่าต่อสู้ จะใช้พลังงาน[ไร้สี]เพิ่มขึ้น 2 ลูก",
			'id-id': "Pada giliran lawan berikutnya, Energi yang dibutuhkan oleh Pokémon yang menerima serangan ini untuk menggunakan serangan bertambah 2 Energi {Bening}."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705245,
				tcgplayer: 567769,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card