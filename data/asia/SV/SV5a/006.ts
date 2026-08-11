import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リーフィア",
		'zh-tw': "葉伊布",
		'th-th': "ลีเฟีย"
	},

	illustrator: "Kuroimori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [470],
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "若い リーフィアほど ツンとくる 青臭い 匂い。 年老いると 落ち葉のような 匂いになる。",
		'zh-tw': "越是年幼的葉伊布， 越是有刺鼻的青草味。 年老後就會變成好像落葉的味道。",
		'th-th': "ลีเฟียนั้นยิ่งอ่อนเยาว์จะยิ่งเหม็นเขียวแสบจมูก พอเริ่มมีอายุมากขึ้นจะมีกลิ่นเหมือนใบไม้ร่วง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "わかばのめぐみ",
			'zh-tw': "嫩葉之恩",
			'th-th': "พรจากใบอ่อน"
		},

		effect: {
			'ja-jp': "自分の手札から「基本エネルギー」を1枚選び、ベンチポケモンにつける。その後、つけたポケモンのHPをすべて回復する。",
			'zh-tw': "從自己的手牌選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。然後，將附上那張卡的寶可夢的HP全部恢復。",
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนบนเบนช์ หลังจากนั้น ฟื้นฟู HP ทั้งหมดของโปเกมอนที่ติดการ์ดนั้น"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "ソーラービーム",
			'zh-tw': "日光束",
			'th-th': "โซลาร์บีม"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761466,
				tcgplayer: 566061,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
}

export default card