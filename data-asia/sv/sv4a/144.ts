import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "メタモン",
		'zh-tw': "百變怪",
		th: "เมตามอน",
		id: "Ditto"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	dexId: [132],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "変身は 完璧なのだが 笑わされて 力が 抜けると 変身は 解けてしまう。",
		'zh-tw': "雖然可以變身得很完美，但一旦被逗笑， 就會因鬆懈而解除變身。",
		th: "สามารถแปลงกายได้อย่างไร้ที่ติ แต่ถ้าขำจนเผลอตัวก็จะกลับร่างเดิม",
		id: "Meskipun hasil transformasinya sempurna, Ditto akan kembali ke wujud aslinya jika dibuat tertawa dan menjadi rileks."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "へんしんスタート",
			'zh-tw': "變身啓動",
			th: "เริ่มแปลงร่าง",
			id: "Perubahan Wujud Start"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、最初の自分の番にだけ1回使える。自分の山札からたねポケモン（「メタモン」をのぞく）を1枚選ぶ。その後、このポケモンと、ついているすべてのカードをトラッシュし、このポケモンがいた場所に、選んだポケモンを出す。そして山札を切る。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則只有在自己的最初回合可使用1次。從自己的牌庫選擇1張【基礎】寶可夢卡（「百變怪」除外）。然後，將這隻寶可夢與附加的卡全部丟棄，將所選的寶可夢放置於這隻寶可夢原先所在的地方。並且重洗牌庫。",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นแรกสุดของฝ่ายเราเท่านั้น เลือกการ์ดโปเกมอน[พื้นฐาน] (ยกเว้น [เมตามอน]) 1 ใบจากสำรับการ์ดฝ่ายเรา หลังจากนั้น ทิ้งโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ที่ตำแหน่งทิ้งการ์ด วางโปเกมอนที่เลือก บนตำแหน่งที่โปเกมอนนี้เคยอยู่ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali hanya pada giliran pertama sendiri jika Pokémon ini ada di Arena Bertarung. Pilih 1 lembar Pokémon Basic (selain Ditto) dari Deck sendiri. Setelah itu, buang Pokémon ini dan semua kartu yang dikenakannya ke Trash, lalu masukkan Pokémon yang telah dipilih ke tempat Pokémon ini tadinya berada. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぺとっ",
			'zh-tw': "黏",
			th: "แนบสนิท",
			id: "Lekat"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card