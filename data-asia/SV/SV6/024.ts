import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロゾ",
		'zh-tw': "蚊香君"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "OKACHEKE",
	dexId: [61],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "全身の 皮膚は 湿っているが お腹の 渦巻きの 部分の 感触は すべすべとしている。",
		'zh-tw': "全身的皮膚都濕答答的， 但肚子上的漩渦部分 摸起來很光滑。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "さいみんじゅつ",
			'zh-tw': "催眠術"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おうふくビンタ",
			'zh-tw': "連環巴掌"
		},

		damage: "30×",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card