import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "念力土偶",
		ja: "ネンドール"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "似乎是由２萬年前的古代人製作的泥偶 蛻變而來的謎之寶可夢。",
		ja: "２万年前の 古代人が つくった 泥人形から 生まれたらしい 謎の ポケモン。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊",
			ja: "かいてんアタック"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "巧合泥偶",
			ja: "きぐうなどぐう"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢與對手的備戰寶可夢數量相同，則增加90點傷害。",
			ja: "自分のベンチポケモンと相手のベンチポケモンの数が同じなら、90ダメージ追加。"
		},

		damage: "90＋",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [344],

	thirdParty: {
		cardmarket: 605895
	}
}

export default card