import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ハラバリー",
		'zh-tw': "電肚蛙",
		th: "ฮาราบารี"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	dexId: [939],
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "ブヨンブヨンの 体を 伸び縮み させると お腹の へそダイナモが 大電力を 発生させる。",
		'zh-tw': "只要伸縮肥嘟嘟的身體，就能讓肚子上的發電臍 產生大量的電氣。",
		th: "เมื่อยืดและหดร่างกายที่ยืดหยุ่น สะดือไดนาโมตรงท้องจะผลิตพลังงานไฟฟ้าจำนวนมากออกมา"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ぜつえんたい",
			'zh-tw': "絕緣體",
			th: "ฉนวนไฟฟ้า"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンからワザのダメージを受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的【雷】寶可夢招式的傷害。",
			th: "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[สายฟ้า]ฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "サンダーエッジ",
			'zh-tw': "雷電刀鋒",
			th: "ธันเดอร์เอดจ์"
		},

		damage: 100,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			th: "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card