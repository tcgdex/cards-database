import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "カジッチュ",
		'zh-tw': "啃果蟲",
		th: "คาจิชชู"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "OKUBO",
	dexId: [840],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "りんごの 中で 暮らしている。 りんごが なくなると 体の 水分が 抜けて 弱ってしまう。",
		'zh-tw': "平時都在蘋果中生活。 如果失去了蘋果，身體的 水分就會流失而變得虛弱。",
		th: "อาศัยอยู่ในแอปเปิล พอไม่มีแอปเปิลแล้ว จะสูญเสียน้ำในร่างกายและอ่อนแอลง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ローリングアタック",
			'zh-tw': "回轉攻擊",
			th: "โรลลิงแอทแทก"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card