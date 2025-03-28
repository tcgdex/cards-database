import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "アラブルタケ",
		id: "Brute Bonnet",
		th: "เห็ดคลุ้มคลั่ง",
		'zh-tw': "猛惡菇",
		'zh-cn': "猛惡菇"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	dexId: [986],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "ある本の中で アラブルタケと 記されていた 生物は このポケモンの 可能性がある。",
		id: "Terdapat kemungkinan bahwa Pokémon ini merupakan makhluk hidup yang tertera sebagai Brute Bonnet dalam suatu buku.",
		th: "มีความเป็นไปได้ว่าโปเกมอนตัวนี้คือสิ่งมีชีวิตที่เรียกว่าเห็ดคลุ้มคลั่งซึ่งถูกระบุไว้ในหนังสือเล่มหนึ่ง",
		'zh-tw': "某本書裡記載的一種 叫做猛惡菇的生物， 有可能就是這隻寶可夢。",
		'zh-cn': "某本書裡記載的一種 叫做猛惡菇的生物， 有可能就是這隻寶可夢。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もうどくふんじん",
			id: "Bubuk Debu Racun Ekstrem",
			th: "ผงฝุ่นพิษร้ายแรง",
			'zh-tw': "劇毒粉塵",
			'zh-cn': "劇毒粉塵"
		},

		effect: {
			ja: "このポケモンに「ブーストエナジー 古代」がついているなら、自分の番に1回使える。おたがいのバトルポケモンを、それぞれどくにする。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini mengenakan Pemacu Energi Purba. Ubah kondisi Pokémon Bertarung kedua pemain masing-masing menjadi Racun.",
			th: "ถ้าโปเกมอนนี้มี [บูสต์เอนเนอร์จี้ โบราณ] ติดอยู่ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ[พิษ]",
			'zh-tw': "若這隻寶可夢身上附有「驅勁能量 古代」，則在自己的回合時可使用1次。將雙方的戰鬥寶可夢【中毒】。",
			'zh-cn': "若這隻寶可夢身上附有「驅勁能量 古代」，則在自己的回合時可使用1次。將雙方的戰鬥寶可夢【中毒】。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "あばれハンマー",
			id: "Palu Mengamuk",
			th: "ค้อนคลั่ง",
			'zh-tw': "暴亂之錘",
			'zh-cn': "暴亂之錘"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card