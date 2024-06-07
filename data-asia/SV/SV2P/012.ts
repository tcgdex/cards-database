import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アノホラグサ",
		'zh-tw': "怖納噬草",
		th: "อาโนะโฮรากุสะ",
		id: "Brambleghast"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [947],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "頭の 枝を 開いて 獲物を 飲みこむ。 生気を 存分に 吸い取ると 吐き出して 捨てるのだ。",
		'zh-tw': "會張開頭的樹枝吞沒獵物。把精氣吸得淋漓盡致後， 就會吐出來丟掉。",
		th: "เปิดกิ่งก้านบนหัวเพื่อกลืนกินเหยื่อลงไป เมื่อสูบพลังชีวิตของอีกฝ่ายไปเต็มที่แล้วก็จะคายทิ้ง",
		id: "Brambleghast membuka ranting di kepalanya dan menelan bulat-bulat mangsanya. Pokémon ini memuntahkan dan membuang mangsanya begitu saja setelah mengisap habis vitalitasnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いのちをすいとる",
			'zh-tw': "生命吸取",
			th: "ดูดซับพลังชีวิต",
			id: "Menyerap Nyawa"
		},

		damage: 30,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			id: "Pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "かれきのろうごく",
			'zh-tw': "枯木牢獄",
			th: "เรือนจำซากไม้",
			id: "Penjara Pohon Kering"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーが、エネルギー2個ぶん多くなる。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量增加2個【無】能量。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ พลังงานสำหรับใช้ท่าต่อสู้ จะใช้พลังงาน[ไร้สี]เพิ่มขึ้น 2 ลูก",
			id: "Pada giliran lawan berikutnya, Energi yang dibutuhkan oleh Pokémon yang menerima serangan ini untuk menggunakan serangan bertambah 2 Energi {Bening}."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card