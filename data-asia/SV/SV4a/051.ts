import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "セビエ",
		'zh-tw': "涼脊龍",
		th: "เซบิเอะ",
		id: "Frigibax"
	},

	illustrator: "rika",
	category: "Pokemon",
	dexId: [996],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "背びれで 熱を 吸収して 氷エネルギーに 変換する。 高温ほど エネルギーが 溜まる。",
		'zh-tw': "會用背鰭吸收熱能以轉換成冰之能量。 溫度越高，累積的能量就越多。",
		th: "ดูดซับความร้อนด้วยครีบหลังแล้วแปลงเป็นพลังงานน้ำแข็ง ยิ่งอุณหภูมิสูงก็ยิ่งสะสมพลังงานได้มากขึ้น",
		id: "Frigibax menyerap panas menggunakan sirip punggungnya dan mengubahnya menjadi energi es. Makin panas suhunya, makin banyak energi yang terkumpul."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "もってくる",
			'zh-tw': "呼喚",
			th: "รวบรวม",
			id: "Mengumpulkan"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 1 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊",
			th: "ตี",
			id: "Menghantam"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card