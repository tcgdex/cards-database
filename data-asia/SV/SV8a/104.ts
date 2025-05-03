import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "キチキギスex",
		id: "Fezandipiti ex",
		th: "คิจิคิกิสึex",
		'zh-tw': "吉雉雞ex",
		'zh-cn': "吉雉雞ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さかてにとる",
			id: "Kesempatan dalam Kesempitan",
			th: "‌ พลิกวิกฤต",
			'zh-tw': "扭轉乾坤",
			'zh-cn': "扭轉乾坤"
		},

		effect: {
			ja: "前の相手の番に、自分のポケモンがきぜつしていたなら、自分の番に1回使える。自分の山札を3枚引く。この番、すでに別の「さかてにとる」を使っていたなら、この特性は使えない。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO. Ambil 3 kartu dari atas Deck sendiri. Jika pada giliran ini, Kesempatan dalam Kesempitan lainnya telah digunakan, Ability ini tidak dapat digunakan.",
			th: "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา[หมดสภาพ] ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา เทิร์นนี้ ถ้าใช้ [พลิกวิกฤต] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้",
			'zh-tw': "在上個對手的回合，若自己的寶可夢【昏厥】了，則在自己的回合時可使用1次。從自己的牌庫抽出3張卡。在這個回合，若已經使出了其他的「扭轉乾坤」，則這個特性無法使用。",
			'zh-cn': "在上個對手的回合，若自己的寶可夢【昏厥】了，則在自己的回合時可使用1次。從自己的牌庫抽出3張卡。在這個回合，若已經使出了其他的「扭轉乾坤」，則這個特性無法使用。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "クルーエルアロー",
			id: "Cruel Arrow",
			th: "ครูเอลแอร์โรว์",
			'zh-tw': "殘酷箭",
			'zh-cn': "殘酷箭"
		},

		effect: {
			ja: "相手のポケモン1匹に、100ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			id: "Serangan ini memberikan kerusakan sejumlah 100 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "ทำแดเมจ 100 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'zh-tw': "對手的1隻寶可夢受到100點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻寶可夢受到100點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card