import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シロナのロズレイド",
		'zh-tw': "<竹蘭的>羅絲雷朵",
		'zh-cn': "<竹蘭的>羅絲雷朵"
	},

	illustrator: "rika",
	rarity: "None",
	category: "Pokemon",
	dexId: [407],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "右手の 毒は 即効性。 左手の 毒は 遅効性。 どちらも 命に かかわるぞ。",
		'zh-tw': "右手的毒是速效的， 左手的毒則是慢性的。 無論哪邊的毒性都能致命。",
		'zh-cn': "右手的毒是速效的， 左手的毒則是慢性的。 無論哪邊的毒性都能致命。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "グローリーエール",
			'zh-tw': "輝煌聲援",
			'zh-cn': "輝煌聲援"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分の「シロナのポケモン」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
			'zh-tw': "只要這隻寶可夢在場上，自己的「竹蘭的寶可夢」使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
			'zh-cn': "只要這隻寶可夢在場上，自己的「竹蘭的寶可夢」使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "リーフステップ",
			'zh-tw': "綠葉舞步",
			'zh-cn': "綠葉舞步"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card