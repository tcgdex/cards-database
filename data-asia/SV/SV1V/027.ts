import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "レアコイル",
		'zh-tw': "三合一磁怪",
		th: "แรคอยล์",
		id: "Magneton"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [82],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "連結した タイプの コイルは 太陽の 黒点が 多いとき たくさん 現れると 言われる。",
		'zh-tw': "據說太陽黑子多的時候，這類連結在一起的小磁怪 會大量出現。",
		th: "ว่ากันว่าคอยล์ชนิดเชื่อมติดกันจะปรากฏตัวเป็นจำนวนมากตอนที่เกิดจุดดับบนดวงอาทิตย์หลายจุด",
		id: "Magneton terbentuk dari Magnemite yang menyatu. Dikatakan bahwa pada saat banyak bintik matahari, Pokémon ini akan bermunculan dalam jumlah yang banyak."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ピッカリだま",
			'zh-tw': "光彈",
			th: "ลูกกลมเจิดจ้า",
			id: "Bola Petir"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "だいばくはつ",
			'zh-tw': "大爆炸",
			th: "ระเบิดยักษ์",
			id: "Ledakan Dahsyat"
		},

		damage: 90,

		effect: {
			ja: "このポケモンにも90ダメージ。",
			'zh-tw': "這隻寶可夢也受到90點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 90 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card