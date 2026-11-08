import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ギャラドス",
		'zh-tw': "暴鯉龍",
		'th-th': "เกียราดอส",
		'id-id': "Gyarados"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 180,
	types: ["Water"],

	description: {
		'ja-jp': "一度 姿を 現すと まわりを すべて 焼き尽くさないと 怒りが 鎮まらない という。",
		'zh-tw': "據說暴鯉龍一旦現身，如果不把周圍的一切都 燃燒殆盡，怒火就不會平息。",
		'th-th': "ว่ากันว่า เมื่อปรากฏตัวออกมาครั้งหนึ่งแล้ว ถ้าไม่ได้ทำลายทุกอย่างโดยรอบให้ราบเป็นหน้ากลองก็จะไม่หายโกรธ",
		'id-id': "Gyarados langsung mengamuk begitu muncul. Dikabarkan amukan Pokémon ini tidak akan mereda hingga ia membumihanguskan sekitarnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "リベンジストーム",
			'zh-tw': "復仇風暴",
			'th-th': "รีเวนจ์สตอร์ม",
			'id-id': "Revenge Storm"
		},

		damage: "80+",

		effect: {
			'ja-jp': "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、100ダメージ追加。",
			'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則增加100點傷害。",
			'th-th': "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			'id-id': "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kerusakan yang diberikan bertambah sejumlah 100."
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "あばれタックル",
			'zh-tw': "暴亂衝撞",
			'th-th': "กระแทกบ้าคลั่ง",
			'id-id': "Tubrukan Mengamuk"
		},

		damage: 200,

		effect: {
			'ja-jp': "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 50."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701077,
				tcgplayer: 568146,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
}

export default card