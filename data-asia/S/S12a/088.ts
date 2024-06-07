import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "扒手貓",
		th: "โจโรเนโกะ",
		ja: "チョロネコ"
	},

	illustrator: "Narumi Sato",
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
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน",
			ja: "ふいをつく"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [509]
}

export default card