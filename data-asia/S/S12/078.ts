import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "肯泰羅",
		th: "เคนเทารอส",
		ja: "ケンタロス"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "如果牠開始用尾巴抽打自己的身體，那就危險了。 牠會用驚人的速度猛衝過來喔。",
		th: "อันตรายนะ ถ้ามันเริ่มฟาดหางลงที่ร่างของตัวมันเอง เพราะมันจะพุ่งเข้าใส่ด้วยความเร็วสูง",
		ja: "しっぽで 自分の 体を 叩きだしたら 危険だぞ。 猛スピードで 突っ込んでくる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢飛",
			th: "ดีด",
			ja: "けとばす"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "腎上腺衝撞",
			th: "อะดรีนาลีนแทกเกิล",
			ja: "アドレナタックル"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上沒有放置傷害指示物，則這個招式失敗。",
			th: "ถ้าโปเกมอนนี้ไม่มีตัวนับแดเมจวางอยู่ ท่าต่อสู้นี้จะล้มเหลว",
			ja: "このポケモンにダメカンがのっていないなら、このワザは失敗。"
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [128]
}

export default card