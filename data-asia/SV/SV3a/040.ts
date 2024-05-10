import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "クスネ",
		'zh-tw': "偷兒狐",
		th: "คุสุเนะ"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [827],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "用心深く ずる賢い。 エサを 盗むと しっぽで 足跡を 消しながら 逃げるのだ。",
		'zh-tw': "性情謹慎且狡猾。在偷盜食物逃走的時候 會用尾巴擦掉自己的足跡。",
		th: "เจ้าเล่ห์และระมัดระวังตัวเป็นอย่างดี ตอนเข้าไปขโมยเหยื่อจะใช้หางลบรอยเท้าแล้วหนีไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card