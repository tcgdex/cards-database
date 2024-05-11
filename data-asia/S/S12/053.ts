import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "岩狗狗",
		th: "อิวังโค",
		ja: "イワンコ"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "非常容易親近，但是卻喜歡東咬西咬，所以如果要一直 培育牠的話會相當費勁。",
		th: "เชื่องมากแต่มีนิสัยชอบกัด จึงต้องเหนื่อยพอสมควรถ้าจะเลี้ยงไปตลอด",
		ja: "よく 懐くが 噛み癖が あるので ずっと 育てるには なかなか 骨が 折れるぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "誘出",
			th: "ล่อออกมา",
			ja: "さそいだす"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว แล้วสลับกับโปเกมอนบนตำแหน่งต่อสู้",
			ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踢飛",
			th: "ดีด",
			ja: "けとばす"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [744]
}

export default card