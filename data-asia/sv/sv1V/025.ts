import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ハルクジラ",
		'zh-tw': "浩大鯨",
		th: "ฮัลค์จิระ",
		id: "Cetitan"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [975],
	hp: 180,
	types: ["Water"],

	description: {
		ja: "氷エネルギーの 集中する 上あごの ツノが 超低温になって 周囲を 凍らせる。",
		'zh-tw': "會集中冰能量使上顎的角變得超低溫，然後將自己 附近的一切都凍成冰塊。",
		th: "พลังงานน้ำแข็งจะไปรวมอยู่ตรงเขาที่ขากรรไกรบนทำให้เขามีอุณหภูมิต่ำมากจนทำให้บริเวณโดยรอบแข็งตัวเป็นน้ำแข็งไปด้วย",
		id: "Tanduk rahang atas Cetitan yang memusatkan energi es menjadi bersuhu sangat rendah dan membekukan sekitarnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突",
			th: "ตบหนัก",
			id: "Hantaman Penuh Tenaga"
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "スイーピングタックル",
			'zh-tw': "刷冰衝撞",
			th: "สวีปปิงแท็กเกิล",
			id: "Sweeping Tackle"
		},

		damage: "200-",

		effect: {
			ja: "このポケモンにのっているダメカンの数×20ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×20點傷害。",
			th: "แดเมจของท่าต่อสู้นี้จะลดลง ตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x20",
			id: "Kerusakan akibat serangan ini berkurang sejumlah 20 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card