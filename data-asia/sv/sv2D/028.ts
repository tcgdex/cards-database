import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ミカルゲ",
		'zh-tw': "花岩怪",
		th: "มิคารูเกะ",
		id: "Spiritomb"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [442],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。",
		'zh-tw': "總是作惡多端，不料有一天本體被 神奇法術綁縛到了楔石上。",
		th: "เพราะเอาแต่ทำเรื่องไม่ดีก็เลยถูกเอาตัวไปผูกติดกับหินค้ำหลักด้วยศาสตร์ลึกลับ",
		id: "Karena selalu melakukan kejahatan, tubuh asli Spiritomb diikat ke Batu Kunci menggunakan teknik misterius."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しっこくのわざわい",
			'zh-tw': "漆黑降災",
			th: "หายนะทมิฬ",
			id: "Malapetaka Hitam Kelam"
		},

		effect: {
			ja: "このポケモンがいるかぎり、おたがいの場のたねポケモンの「ポケモンV」の特性は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在場上，雙方場上【基礎】寶可夢的「寶可夢【V】」的特性全部消除。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ ความสามารถของ [โปเกมอน【V】] ที่เป็นโปเกมอน[พื้นฐาน]บนกระดานของทั้งสองฝ่าย ทั้งหมดจะหายไป",
			id: "Selama Pokémon ini ada di Arena, Pokémon {V} yang merupakan Pokémon Basic di Arena kedua pemain menjadi tidak memiliki Ability."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぱっときえる",
			'zh-tw': "憑空消失",
			th: "หายวับ",
			id: "Menghilang Mendadak"
		},

		damage: 10,

		effect: {
			ja: "このポケモンと、ついているすべてのカードを、手札にもどす。",
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回手牌。",
			th: "นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ กลับขึ้นมือ",
			id: "Kembalikan Pokémon ini dan semua kartu yang dikenakannya ke Kartu Pegangan."
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
	regulationMark: "G"
}

export default card