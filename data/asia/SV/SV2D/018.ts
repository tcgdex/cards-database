import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ライチュウ",
		'zh-tw': "雷丘",
		'th-th': "ไรชู",
		'id-id': "Raichu"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [26],
	hp: 140,
	types: ["Lightning"],

	description: {
		'ja-jp': "尻尾が アースの 役目をはたして 電気を 地面に 逃がすので 自分自身は しびれたりしない。",
		'zh-tw': "尾巴會發揮接地線的作用把電氣導入地面， 所以自己不會被電得發麻。",
		'th-th': "หางทำหน้าที่เป็นสายดินปล่อยไฟฟ้าไหลลงสู่พื้นดิน ทำให้ร่างกายของตัวเองไม่ชา",
		'id-id': "Karena ekornya berperan sebagai grounding yang melepaskan listrik ke tanah, Raichu tidak tersengat oleh listrik tersebut."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "エレキチャージ",
			'zh-tw': "電氣充能",
			'th-th': "อิเล็กทริกชาร์จ",
			'id-id': "Electric Charge"
		},

		effect: {
			'ja-jp': "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張「基本【雷】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Listrik} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'ja-jp': "10まんボルト",
			'zh-tw': "十萬伏特",
			'th-th': "หนึ่งแสนโวลต์",
			'id-id': "Ledakan Listrik"
		},

		damage: 200,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。",
			'th-th': "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
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
				cardmarket: 705322,
				tcgplayer: 565880,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card