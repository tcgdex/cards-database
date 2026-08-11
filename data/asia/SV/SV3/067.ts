import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パルデア ウパー",
		'zh-tw': "帕底亞 烏波",
		'th-th': "พัลเดีย อูปา"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [194],
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "縄張り争いに 敗れて 陸で 暮らすうちに 毒の 粘膜で 体を 保護するように 変わった。",
		'zh-tw': "因搶輸地盤而到陸地上生活，久而久之變成了是 用帶毒的黏膜來保護身體。",
		'th-th': "หลังจากที่แพ้สงครามแย่งชิงอาณาเขตจนต้องมาอาศัยอยู่บนบก ก็ปรับตัวให้มีเมือกพิษปกป้องร่างกาย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "とびちるどく",
			'zh-tw': "噴濺毒",
			'th-th': "พิษกระเด็น"
		},

		effect: {
			'ja-jp': "おたがいのバトルポケモンを、それぞれどくにする。",
			'zh-tw': "將雙方的戰鬥寶可夢【中毒】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ[พิษ]"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "しっぽではたく",
			'zh-tw': "擺尾拍擊",
			'th-th': "สะบัดหาง"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724018,
				tcgplayer: 567021,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card