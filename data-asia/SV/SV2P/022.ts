import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ハルクジラ",
		'zh-tw': "浩大鯨",
		th: "ฮัลค์จิระ",
		id: "Cetitan"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [975],
	hp: 180,
	types: ["Water"],

	description: {
		ja: "氷雪地帯を 回遊する。 強靭な 筋肉と ぶ厚い 皮下脂肪で 体を 守る。",
		'zh-tw': "迴游在冰雪地帶的寶可夢。會用強韌的肌肉和厚實的 皮下脂肪保護自己的身體。",
		th: "เดินท่องไปในพื้นที่ที่ปกคลุมด้วยหิมะและน้ำแข็ง กล้ามเนื้อที่แข็งแรงและไขมันหนาใต้ผิวหนังนั้นจะช่วยปกป้องร่างกาย",
		id: "Cetitan bermigrasi ke daerah salju dan es. Pokémon ini melindungi tubuhnya dengan otot yang kuat dan lemak tebal di bawah kulit."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "つららミサイル",
			'zh-tw': "冰柱飛彈",
			th: "มิสไซล์แท่งน้ำแข็ง",
			id: "Misil Pilar Es"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "スペシャルホーン",
			'zh-tw': "特殊角擊",
			th: "สเปเชียลฮอร์น",
			id: "Special Horn"
		},

		damage: "80+",

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、140ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則增加140點傷害。",
			th: "ถ้าโปเกมอนนี้มีพลังงานพิเศษติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 140",
			id: "Jika Pokémon ini mengenakan Energi Spesial, kerusakan yang diberikan bertambah sejumlah 140."
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