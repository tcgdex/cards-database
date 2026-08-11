import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カプサイジ",
		'zh-tw': "熱辣娃",
		'th-th': "แคปไซจิ",
		'id-id': "Capsakid"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [951],
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "パルデアの 郷土料理は 抜け落ちた カプサイジの 前歯が 使われているので 激辛なのだ。",
		'zh-tw': "帕底亞當地會用熱辣娃掉落的門牙來做料理， 所以超級無敵霹靂辣。",
		'th-th': "อาหารท้องถิ่นของพัลเดียมีรสชาติเผ็ดมากเพราะใช้ฟันหน้าที่ร่วงหล่นของแคปไซจิเป็นวัตถุดิบ",
		'id-id': "Rasa masakan khas Daerah Paldea sangat pedas karena dibuat menggunakan gigi depan Capsakid yang lepas."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "からくなる",
			'zh-tw': "變辣",
			'th-th': "เผ็ดขึ้น",
			'id-id': "Memedaskan"
		},

		effect: {
			'ja-jp': "自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【火】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
			'id-id': "Pilih 1 lembar Energi Dasar {Api} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "やんちゃげり",
			'zh-tw': "調皮踢",
			'th-th': "เตะแกล้ง",
			'id-id': "Tendangan Nakal"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693087,
				tcgplayer: 568239,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card