import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チリーン",
		'zh-tw': "風鈴鈴"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [358],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "超音波の 鳴き声を 持つ。 ふわふわと 浮かび 風に 乗って 長い 距離を 旅する。",
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來，乘著風旅行到遠方。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ねむりにさそう",
			'zh-tw': "誘導睡眠"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをねむりにする。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【睡眠】。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "サイコショット",
			'zh-tw': "精神射擊"
		},

		damage: 70
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
	regulationMark: "G"
}

export default card