import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "シビビール",
		'zh-tw': "麻麻鰻",
		th: "ชิบิบีล"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [603],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "丸い 模様が 発電 器官。 相手に 巻きついてから 模様を 押しつけて 電気を 流すのだ。",
		'zh-tw': "圓圓的花紋是發電器官。會先纏住對手，然後把花紋壓在對手身上後放出電流。",
		th: "ลายกลม ๆ เป็นอวัยวะผลิตกระแสไฟฟ้า จะรัดพันตัวอีกฝ่ายแล้วแนบลายดังกล่าวลงไปเพื่อปล่อยกระแสไฟฟ้าใส่"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ショックウェーブ",
			'zh-tw': "衝擊波",
			th: "ช็อกเวฟ"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ライトニングボール",
			'zh-tw': "雷電球",
			th: "ไลท์นิงบอล"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card