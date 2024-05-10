import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "トロピウス",
		'zh-tw': "熱帶龍"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [357],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "熱帯の ジャングルに 生息。 首の フサは 甘くて 美味しい。 １年に ２回 実を つける。",
		'zh-tw': "棲息在熱帶叢林裡。脖子上的果實香甜美味。 每年會結果２次。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "リーフドレイン",
			'zh-tw': "綠葉吸取"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "なんごくのかぜ",
			'zh-tw': "南國之風"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡，全部改附於1隻備戰寶可夢身上。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card