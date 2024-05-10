import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "チルット",
		'zh-tw': "青綿鳥",
		th: "ทิลท์โท"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [333],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "真綿のような 翼の 手入れは 絶対に 欠かさない。 汚れると 水浴びをして きれいに 洗う。",
		'zh-tw': "從不疏於打理絲綿般的翅膀。一弄髒就會到水裡洗乾淨。",
		th: "คอยดูแลปีกที่เหมือนกับใยไหมอยู่ตลอดไม่เคยขาด พอสกปรกก็จะไปอาบน้ำล้างตัวจนสะอาด"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふわふわガード",
			'zh-tw': "蓬蓬防守",
			th: "เกราะฟูฟ่อง"
		},

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-20」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-20]"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊",
			th: "ตีปีก"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card