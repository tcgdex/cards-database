import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲンガー",
		'zh-tw': "耿鬼",
		th: "เก็งกา"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [94],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "命を 奪おうと 決めた 獲物の 影に 潜り込み じっと チャンスを 狙ってる。",
		'zh-tw': "會潛進獵物的影子裡，然後靜靜地等待 奪取性命的機會到來。",
		th: "เข้าไปในเงาของเหยื่อที่เล็งไว้ แล้วรอโอกาสปลิดชีพ"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ナイトゲート",
			'zh-tw': "暗黑之門",
			th: "ไนท์เกต"
		},

		effect: {
			ja: "自分の番に1回使える。自分のバトルポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "在自己的回合時可使用1次。將自己的戰鬥寶可夢與備戰寶可夢互換。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "あくむ",
			'zh-tw': "惡夢",
			th: "ฝันร้าย"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 734274
	}
}

export default card