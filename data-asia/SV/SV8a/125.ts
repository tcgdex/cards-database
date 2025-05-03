import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーブイ",
		id: "Eevee",
		th: "อีวุย",
		'zh-tw': "伊布",
		'zh-cn': "伊布"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "不規則な 遺伝子を 持つ。 石から出る 放射線によって 体が 突然変異を 起こす。",
		id: "Eevee memiliki susunan genetik yang tidak teratur. Tubuhnya akan bermutasi ketika terkena radiasi yang dikeluarkan batu elemen.",
		th: "มีหน่วยพันธุกรรมที่ผิดปกติ รังสีจากหินทำให้ร่างกายกลายพันธุ์อย่าง ฉับพลัน",
		'zh-tw': "有著不規則的基因。 石頭散發出的放射線， 會使牠的身體發生突變。",
		'zh-cn': "有著不規則的基因。 石頭散發出的放射線， 會使牠的身體發生突變。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ブーストしんか",
			id: "Evolusi Terpacu",
			th: "เสริมกำลังวิวัฒนาการ",
			'zh-tw': "提升進化",
			'zh-cn': "提升進化"
		},

		effect: {
			ja: "このポケモンは、バトル場にいるかぎり、最初の自分の番や、出したばかりの番でも進化できる。",
			id: "Selama Pokémon ini ada di Arena Bertarung, Pokémon ini juga dapat dievolusikan pada giliran pertama pemain dan pada giliran Pokémon ini dimasukkan.",
			th: "โปเกมอนนี้ ตราบใดที่ยังอยู่บนตำแหน่งต่อสู้ แม้จะเป็นเทิร์นแรกสุดของฝ่ายเรา หรือเทิร์นที่เพิ่งออกมาก็สามารถวิวัฒนาการได้",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，就算在自己的最初回合或者剛使出的回合，也可進化。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，就算在自己的最初回合或者剛使出的回合，也可進化。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "とつげき",
			id: "Menyerang",
			th: "ประจัญบาน",
			'zh-tw': "突擊",
			'zh-cn': "突擊"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'zh-cn': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card