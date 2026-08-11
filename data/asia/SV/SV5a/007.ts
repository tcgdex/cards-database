import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "テツノイサハ",
		'zh-tw': "鐵斑葉",
		'th-th': "ใบด่างเหล็ก"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1010],
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "わずかな 目撃談によると 光り輝く 剣で 大木や 大岩を なます切りにしたという。",
		'zh-tw': "根據極少數的目擊紀錄， 牠似乎用光輝燦爛的劍 將大樹與巨岩切成了絲。",
		'th-th': "ตามคำบอกเล่าของผู้พบเห็นเหตุการณ์ไม่กี่คน ว่ากันว่ามันหั่นต้นไม้และหินขนาดใหญ่ออกเป็นแท่ง ๆ ด้วยดาบที่เปล่งประกาย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "リカバーネット",
			'zh-tw': "補全之網",
			'th-th': "รีคัฟเวอร์เน็ต"
		},

		effect: {
			'ja-jp': "自分のトラッシュからポケモンを2枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇最多2張寶可夢卡，在給對手看過後加入手牌。",
			'th-th': "เลือกการ์ดโปเกมอนได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "アベンジエッジ",
			'zh-tw': "復仇刀鋒",
			'th-th': "อเวนจ์เอดจ์"
		},

		damage: "100+",

		effect: {
			'ja-jp': "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、60ダメージ追加。",
			'zh-tw': "在上個對手的回合，若自己的寶可夢因招式的傷害而【昏厥】了，則增加60點傷害。",
			'th-th': "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา[หมดสภาพ] ด้วยแดเมจของท่าต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 60"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761467,
				tcgplayer: 566062,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card