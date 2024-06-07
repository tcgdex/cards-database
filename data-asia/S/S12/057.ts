import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "扒手貓",
		th: "โจโรเนโกะ",
		ja: "チョロネコ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "為了要看見人們困擾的樣子而去偷盜他們的物品。 和偷兒狐是競爭對手。",
		th: "ขโมยของคนอื่นเพราะอยากเห็นคนอื่นเดือดร้อน เป็นศัตรูกับคุสุเนะ",
		ja: "困った 姿を 見るために ひとの ものを 盗みだす。 クスネとは ライバルなのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亂抓",
			th: "ข่วนแหลก",
			ja: "みだれひっかき"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			ja: "コインを3回投げ、オモテの数×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [509]
}

export default card