import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "フォレトスex",
		'zh-tw': "佛烈托斯ex",
		th: "ฟอเรทอสex",
		id: "Forretress ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ばくれつエナジー",
			'zh-tw': "爆裂能量",
			th: "พลังงานระเบิด",
			id: "Energi Peledak"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分の山札から「基本エネルギー」を5枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。從自己的牌庫選擇最多5張「基本【草】能量」卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้ว จะทำให้โปเกมอนนี้[หมดสภาพ] เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] ได้สูงสุด 5 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pokémon ini KO jika menggunakan Ability ini. Pilih paling banyak 5 lembar Energi Dasar {Daun} dari Deck sendiri, lalu kenakan sesukanya pada Pokémon sendiri. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "ガードプレス",
			'zh-tw': "防守壓制",
			th: "การ์ดเพรส",
			id: "Guard Press"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
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