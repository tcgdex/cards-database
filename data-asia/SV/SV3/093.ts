import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "マッスグマ",
		'zh-tw': "直衝熊",
		th: "มัสสึกุมะ"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [264],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "抜群の 瞬発力と するどいツメで 獲物を しとめる。 曲がった 道を 走るのは 下手。",
		'zh-tw': "用自己超群的爆發力和銳利的爪子來制服獵物。不擅長在彎曲的道路上奔跑。",
		th: "สามารถแสดงพลังได้อย่างรวดเร็ว ใช้กรงเล็บแหลมคมในการจัดการเหยื่อ ไม่ถนัดวิ่งบนถนนทางโค้ง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ジェットヘッド",
			'zh-tw': "噴射頭擊",
			th: "เจ็ตเฮด"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน"
		},

		damage: 150,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 724047
	}
}

export default card