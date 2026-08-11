import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "扒手貓",
		'th-th': "โจโรเนโกะ",
		'ja-jp': "チョロネコ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "為了要看見人們困擾的樣子而去偷盜他們的物品。 和偷兒狐是競爭對手。",
		'th-th': "ขโมยของคนอื่นเพราะอยากเห็นคนอื่นเดือดร้อน เป็นศัตรูกับคุสุเนะ",
		'ja-jp': "困った 姿を 見るために ひとの ものを 盗みだす。 クスネとは ライバルなのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亂抓",
			'th-th': "ข่วนแหลก",
			'ja-jp': "みだれひっかき"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680196,
				tcgplayer: 570115,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [509],
}

export default card