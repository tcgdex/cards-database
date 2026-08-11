import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ガーディ",
		'zh-tw': "卡蒂狗",
		'th-th': "การ์ดี",
		'id-id': "Growlithe"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [58],
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "人懐こく 誠実な 性格。 敵には ほえて かみつき 追い払おうとする。",
		'zh-tw': "性格誠實，容易和人親近。遇到敵人時牠會吼叫追咬， 試著把敵人趕走。",
		'th-th': "เป็นมิตรและซื่อสัตย์ จะพยายามไล่ศัตรูออกไปด้วยการเห่าและไล่กัดอีกฝ่าย",
		'id-id': "Growlithe jinak dan berkepribadian jujur. Pokémon ini mengusir lawan dengan menggonggong dan menggigit mereka."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "もえあがる",
			'zh-tw': "燃起",
			'th-th': "ลุกโชน",
			'id-id': "Membara"
		},

		effect: {
			'ja-jp': "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張「基本【火】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Api} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'ja-jp': "ほのおのツメ",
			'zh-tw': "火之爪",
			'th-th': "กรงเล็บไฟ",
			'id-id': "Cakar Api"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693089,
				tcgplayer: 568241,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card