import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノイサハex",
		id: "Iron Leaves ex",
		th: "ใบด่างเหล็กex",
		'zh-tw': "鐵斑葉ex",
		'zh-cn': "鐵斑葉ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ラピッドバーニア",
			id: "Rapid Vernier",
			th: "แรพพิดเวอร์เนียร์",
			'zh-tw': "迅速游標",
			'zh-cn': "迅速游標"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。このポケモンをバトルポケモンと入れ替える。入れ替えた場合、自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Tukar Pokémon ini dengan Pokémon Bertarung. Jika ditukar, pilih sesukanya Energi yang dikenakan pada Pokémon di Arena sendiri, lalu pindahkan ke Pokémon ini.",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง สลับโปเกมอนนี้กับโปเกมอนบนตำแหน่งต่อสู้ เมื่อสลับแล้ว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายมาติดกับโปเกมอนนี้",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將這隻寶可夢與戰鬥寶可夢互換。互換的情況下，選擇自己的場上寶可夢身上附加的任意數量的能量卡，改附於這隻寶可夢身上。",
			'zh-cn': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將這隻寶可夢與戰鬥寶可夢互換。互換的情況下，選擇自己的場上寶可夢身上附加的任意數量的能量卡，改附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "プリズムエッジ",
			id: "Prism Edge",
			th: "ปริซึมเอดจ์",
			'zh-tw': "稜鏡刀鋒",
			'zh-cn': "稜鏡刀鋒"
		},

		damage: 180,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card