import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "マスカーニャex",
		'zh-tw': "魔幻假面喵ex",
		th: "มาสเคอเนียex",
		id: "Meowscarada ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ブーケマジック",
			'zh-tw': "花束魔法",
			th: "บูเกต์เมจิก",
			id: "Bouquet Magic"
		},

		effect: {
			ja: "自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。相手のベンチポケモン1匹に、ダメカンを3個のせる。",
			'zh-tw': "在自己的回合，若從自己的手牌將1張「基本【草】能量」卡丟棄，則可使用1次。在對手的1隻備戰寶可夢身上放置3個傷害指示物。",
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด ใช้ได้ 1 ครั้ง วางตัวนับแดเมจ 3 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika membuang 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri ke Trash. Letakkan 3 Token Kerusakan pada 1 Pokémon Cadangan lawan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スクラッチネイル",
			'zh-tw': "抓刮銳爪",
			th: "สแครชเนล",
			id: "Scratch Nail"
		},

		damage: "100+",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、120ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加120點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			id: "Jika Pokémon Bertarung lawan memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 120."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card