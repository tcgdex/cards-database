import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "エーフィex",
		id: "Espeon ex",
		th: "เอฟีex",
		'zh-tw': "太陽伊布ex",
		'zh-cn': "太陽伊布ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "サイコアウト",
			id: "Psyout",
			th: "ไซโคเอาต์",
			'zh-tw': "精神出局",
			'zh-cn': "精神出局"
		},

		damage: 160,

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			id: "Pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lalu buang ke Trash.",
			th: "เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。",
			'zh-cn': "在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。"
		}
	}, {
		cost: ["Grass", "Psychic", "Darkness"],

		name: {
			ja: "アマゼツ",
			id: "Amazez",
			th: "แอมะเซซ",
			'zh-tw': "阿賽斯特萊石",
			'zh-cn': "阿賽斯特萊石"
		},

		effect: {
			ja: "相手の進化しているポケモン全員の上から、それぞれ「進化カード」を1枚ずつはがして退化させる。はがしたカードは、相手の山札にもどして切る。",
			id: "Turunkan tingkat evolusi semua Pokémon lawan yang telah berevolusi dengan melepas masing-masing 1 lembar kartu evolusi dari atasnya. Kartu yang dilepas dikocok kembali ke Deck lawan.",
			th: "ถอด [การ์ดวิวัฒนาการ] ออกจากด้านบนของโปเกมอนฝ่ายตรงข้ามที่วิวัฒนาการ แล้วทุกตัว แต่ละตัวตัวละ 1 ใบและทำให้วิวัฒนาการย้อนกลับ การ์ดที่ถอดออก มา ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ",
			'zh-tw': "從對手的所有進化的寶可夢身上，各移除1張「進化卡」使其退化。將移除的卡放回對手的牌庫並重洗。",
			'zh-cn': "從對手的所有進化的寶可夢身上，各移除1張「進化卡」使其退化。將移除的卡放回對手的牌庫並重洗。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card