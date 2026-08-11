import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤヤコマ",
		'zh-tw': "小箭雀",
		'th-th': "ยายาโคมะ",
		'id-id': "Fletchling"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [661],
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "普段は 穏やかな 気性だが 戦いになると ホルモンバランスが 変わり 攻撃的になる。",
		'zh-tw': "平時性情溫和，但在戰鬥開始後，荷爾蒙的平衡會 發生變化而變得具有攻擊性。",
		'th-th': "รักสงบ แต่พอถึงเวลาต่อสู้ ความสมดุลของฮอร์โมนจะเปลี่ยนไปแล้วก้าวร้าวขึ้น",
		'id-id': "Biasanya Fletchling bersifat tenang, namun ketika bertarung, keseimbangan hormonnya berubah dan ia menjadi agresif."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "きゅうこうか",
			'zh-tw': "急降",
			'th-th': "โฉบ",
			'id-id': "Menukik Drastis"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Lightning",
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
				cardmarket: 705365,
				tcgplayer: 565923,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card