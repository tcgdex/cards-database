import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ミカルゲ",
		'zh-tw': "花岩怪",
		th: "มิคารูเกะ",
		id: "Spiritomb"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [442],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "１０８個の 魂で できている。 二度と 悪さを しないように 要石に 縛りつけられている。",
		'zh-tw': "由１０８個靈魂構成。為了防止自己再度作惡， 而被綁縛到了楔石上。",
		th: "เกิดจากวิญญาณ 108 ดวง ถูกผูกติดกับหินค้ำหลักเพื่อไม่ให้ไปทำเรื่องไม่ดีอีกเป็นครั้งที่สอง",
		id: "Spiritomb terbentuk dari 108 roh. Agar tidak melakukan keburukan untuk kedua kalinya, Pokémon ini diikat di Batu Kunci."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ちょうはつ",
			'zh-tw': "挑釁",
			th: "ยั่วยุ",
			id: "Memancing Emosi"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
			id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "ほろびのせんこく",
			'zh-tw': "滅亡宣告",
			th: "ประกาศแห่งการทำลายล้าง",
			id: "Deklarasi Fana"
		},

		effect: {
			ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをきぜつさせる。",
			'zh-tw': "擲2次硬幣，若全部為正面，則將對手的戰鬥寶可夢【昏厥】。",
			th: "ทอยเหรียญ 2 ครั้ง ถ้าออกหัวทั้งหมด จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ]",
			id: "Lempar koin 2 kali. Jika semuanya sisi depan, Pokémon Bertarung lawan KO."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693127
	}
}

export default card