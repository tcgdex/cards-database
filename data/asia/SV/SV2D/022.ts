import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "バチンウニ",
		'zh-tw': "啪嚓海膽",
		'th-th': "บาจินอุนิ",
		'id-id': "Pincurchin"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [871],
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "エサを 消化するときに 電気を 生みだす。 ５本の 硬い 歯で 海藻を こそぎ落とし 食べる。",
		'zh-tw': "消化食物時會製造出電力。５顆堅硬的牙齒能用來 把海藻連根拔起來吃。",
		'th-th': "สร้างพลังงานไฟฟ้าออกมาเมื่อย่อยอาหาร ใช้ฟันที่แข็งแรง 5 ซี่ขูดสาหร่ายออกมากิน",
		'id-id': "Pincurchin menghasilkan listrik saat mencerna makanannya. Pokémon ini menggunakan 5 giginya yang keras untuk mengikis dan memakan rumput laut."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "しびればり",
			'zh-tw': "麻痺針",
			'th-th': "เข็มยาชา",
			'id-id': "Jarum Pelumpuh"
		},

		damage: 20,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'ja-jp': "ついげきバリバリ",
			'zh-tw': "啪啪追擊",
			'th-th': "ไล่ตีเปรี๊ยะ ๆ",
			'id-id': "Serangan Lanjutan Berlistrik"
		},

		damage: 100,

		effect: {
			'ja-jp': "このワザは、前の自分の番に、このポケモンが「しびればり」を使っていなければ使えない。",
			'zh-tw': "這個招式必須在上個自己的回合這隻寶可夢使用了「麻痺針」才可使用。",
			'th-th': "ท่าต่อสู้นี้ ในเทิร์นก่อนของฝ่ายเรา ถ้าโปเกมอนนี้ไม่ได้ใช้ [เข็มยาชา] จะใช้ไม่ได้",
			'id-id': "Serangan ini dapat digunakan jika pada giliran sendiri sebelumnya, Pokémon ini menggunakan Jarum Pelumpuh."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705326,
				tcgplayer: 565884,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card