import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可可多拉",
		'th-th': "โคโคโดรา",
		'ja-jp': "ココドラ"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "保護牠身體的鋼鐵盔甲，是由牠吃下的鐵礦石以及 偶爾吃下的鐵軌所製成的。",
		'th-th': "กินแร่เหล็กหรือบางครั้งก็รางรถไฟเพื่อสร้างเกราะเหล็กกล้าปกป้องร่างกาย",
		'ja-jp': "鉄鉱石や たまに 鉄道の レールを 食べて 体を 守る 鋼の 鎧が つくられる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			'th-th': "กระแทก",
			'ja-jp': "ぶつかる"
		},

		damage: 10,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "撞一下",
			'th-th': "จุ้นจ้านหน่อย",
			'ja-jp': "ちょっとつっこむ"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'th-th': "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'ja-jp': "このポケモンにも10ダメージ。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680204,
				tcgplayer: 570123,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [304],
}

export default card