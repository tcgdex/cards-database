import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ユニラン",
		'zh-tw': "單卵細胞球",
		th: "ยูนิรัน",
		'zh-cn': "單卵細胞球"
	},

	illustrator: "Cona Nitanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [577],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "テレパシーで 意思を 送りあう。 強いショックを 受けると 体を 包む 液体が 漏れ出す。",
		'zh-tw': "透過心靈感應來與夥伴交流。如果受到了強烈的衝擊， 包裹著身體的液體就會漏出來。",
		th: "สามารถส่งความคิดหากันด้วยกระแสจิตได้ เมื่อได้รับการกระทบอย่างรุนแรงของเหลวที่ห่อหุ้มร่างจะรั่วไหลออกมา",
		'zh-cn': "透過心靈感應來與夥伴交流。如果受到了強烈的衝擊， 包裹著身體的液體就會漏出來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน",
			'zh-cn': "偷襲"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			'zh-cn': "擲1次硬幣若為反面，則這個招式失敗。"
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

	retreat: 1,
	regulationMark: "H"
}

export default card