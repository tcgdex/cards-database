import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "レアコイル",
		'zh-tw': "三合一磁怪",
		th: "แรคอยล์",
		id: "Magneton"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [82],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "３つのコイルは 強い 磁力で 結びついている。 そばに寄ると 強い 耳鳴りに 襲われる。",
		'zh-tw': "３隻小磁怪因著強烈的磁力而結合。只要靠近牠 就會發生強烈的耳鳴。",
		th: "คอยล์ 3 ตัวเชื่อมต่อกันด้วยพลังงานแม่เหล็กแรงสูง หากเข้าไปใกล้จะเกิดอาการหูอื้อขั้นรุนแรง",
		id: "Tiga Magnemite yang terhubung oleh kekuatan magnet yang kuat. Telingamu akan sakit oleh dengungan kuat jika mendekati Magneton."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ジャンクマグネット",
			'zh-tw': "廢品磁鐵",
			th: "จังก์แมกเน็ท",
			id: "Junk Magnet"
		},

		effect: {
			ja: "自分のトラッシュからグッズを2枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇最多2張物品卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ดไอเท็มได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			id: "Pilih paling banyak 2 lembar Item dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ヘッドボルト",
			'zh-tw': "伏特頭擊",
			th: "เฮดโบลท์",
			id: "Head Bolt"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card