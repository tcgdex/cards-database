import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ハカドッグ",
		'zh-tw': "墓揚犬",
		'th-th': "ฮากาด็อก"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [972],
	hp: 140,
	types: ["Psychic"],

	description: {
		'ja-jp': "普段は 墓場で 眠っている。 数いる 犬ポケモンの中でも もっとも 主に 忠実だ。",
		'zh-tw': "平時都在墳場裡睡覺。在為數眾多的犬寶可夢中，牠是對主人最為忠實的。",
		'th-th': "ปกติจะนอนอยู่ในสุสาน มีความซื่อสัตย์ต่อเจ้านายมากที่สุดในบรรดาโปเกมอนหมาทั้งหมด"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "うしろげり",
			'zh-tw': "後踢",
			'th-th': "เตะกลับหลัง"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "しにものぐるい",
			'zh-tw': "拼命",
			'th-th': "สู้แค่ตาย"
		},

		damage: "80+",

		effect: {
			'ja-jp': "相手のサイドの残り枚数が4枚・2枚なら、120ダメージ追加。",
			'zh-tw': "若對手剩餘獎賞卡的張數為4張・2張，則增加120點傷害。",
			'th-th': "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้ามเป็น 4 ใบหรือ 2 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724001,
				tcgplayer: 567008,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card