import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "パオジアンex",
		'zh-tw': "古劍豹ex",
		th: "เป้าเจี้ยนex",
		id: "Chien-Pao ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "わななくれいき",
			'zh-tw': "戰慄寒氣",
			th: "ไอเย็นสะท้าน",
			id: "Hawa Dingin Menggigil"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札から「基本エネルギー」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫選擇最多2張「基本【水】能量」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Pilih paling banyak 2 lembar Energi Dasar {Air} dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ヘイルブレード",
			'zh-tw': "冰雹利刃",
			th: "ดาบลูกเห็บ",
			id: "Hail Blade"
		},

		damage: "60×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×60ダメージ。",
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的【水】能量卡丟棄，造成其張數×60點傷害。",
			th: "ทิ้งพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x60",
			id: "Buang sesukanya Energi {Air} yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembarnya."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card