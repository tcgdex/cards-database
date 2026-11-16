import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ジラーチV",
		'zh-tw': "基拉祈V"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [385],
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ねがいのかけはし",
			'zh-tw': "許願之橋"
		},

		effect: {
			ja: "自分のたねポケモンの「ポケモンV」が、相手のポケモンからワザのダメージを受けてきぜつするたび、1回使える。きぜつしたポケモンについている基本エネルギーを1枚選び、自分の別のポケモンにつけ替える。",
			'zh-tw': "每次當自己的【基礎】寶可夢的「寶可夢【V】」受到對手的寶可夢招式的傷害而【氣絕】時，可使用1次。選擇1張【氣絕】的寶可夢身上附加的基本能量卡，改附於自己的其他寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			ja: "ヒプノストライク",
			'zh-tw': "催眠強襲"
		},

		effect: {
			ja: "おたがいのバトルポケモンを、それぞれねむりにする。",
			'zh-tw': "將雙方的戰鬥寶可夢【睡眠】。"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 650988,
				tcgplayer: 569780,
				cardtrader: 234091,
			},
		},
	]
}

export default card