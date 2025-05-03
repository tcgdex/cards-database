import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イイネイヌex",
		id: "Okidogi ex",
		th: "อี้เนะอินุex",
		'zh-tw': "夠讚狗ex",
		'zh-cn': "夠讚狗ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ポイズンマッスル",
			id: "Poison Muscle",
			th: "พอยซันมัสเซิล",
			'zh-tw': "猛毒筋力",
			'zh-cn': "猛毒筋力"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。つけた場合、このポケモンをどくにする。",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Kegelapan} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck. Jika dikenakan, ubah kondisi Pokémon ini menjadi Racun.",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ความมืด]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด เมื่อติดแล้ว ทำให้โปเกมอนนี้เป็นสภาวะ[พิษ]",
			'zh-tw': "從自己的牌庫選擇最多2張「基本【惡】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。附上卡的情況下，將這隻寶可夢【中毒】。",
			'zh-cn': "從自己的牌庫選擇最多2張「基本【惡】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。附上卡的情況下，將這隻寶可夢【中毒】。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "クレイジーチェーン",
			id: "Crazy Chain",
			th: "‌เครซีเชน",
			'zh-tw': "瘋狂連鎖",
			'zh-cn': "瘋狂連鎖"
		},

		damage: "130+",

		effect: {
			ja: "このポケモンがどくなら、130ダメージ追加。",
			id: "Jika Pokémon ini mengalami kondisi Racun, kerusakan yang diberikan bertambah sejumlah 130.",
			th: "ถ้าโปเกมอนนี้เป็นสภาวะ[พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 130",
			'zh-tw': "若這隻寶可夢【中毒】，則增加130點傷害。",
			'zh-cn': "若這隻寶可夢【中毒】，則增加130點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card