import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グレイシア",
		'zh-tw': "冰伊布",
		'th-th': "กราเซีย"
	},

	illustrator: "rika",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [471],
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "体温を 下げることで 全身の 体毛を 凍らせて 鋭く 尖った 針のようにして 飛ばす。",
		'zh-tw': "透過使體溫下降， 讓全身的體毛結凍， 並像尖銳的針一般發射。",
		'th-th': "ทำให้ตัวเย็นลงเพื่อให้ขนแข็งคมราวเข็มแล้วสะบัดออกไป"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "しみいるれいき",
			'zh-tw': "滲透寒氣",
			'th-th': "ไอเย็นซึมลึก"
		},

		damage: 30,

		effect: {
			'ja-jp': "次の相手の番の終わりに、このワザを受けたポケモンにダメカンを9個のせる。",
			'zh-tw': "在下個對手的回合結束時，在受到這個招式的寶可夢身上放置9個傷害指示物。",
			'th-th': "เมื่อจบเทิร์นถัดไปของฝ่ายตรงข้าม วางตัวนับแดเมจ 9 ตัวบนโปเกมอนที่ได้รับท่าต่อสู้นี้"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "つららミサイル",
			'zh-tw': "冰柱飛彈",
			'th-th': "มิสไซล์แท่งน้ำแข็ง"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761481,
				tcgplayer: 566076,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
}

export default card