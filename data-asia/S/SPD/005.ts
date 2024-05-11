import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代歐奇希斯V",
		ja: "デオキシスV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "精神強念",
			ja: "サイコキネシス"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "力量刀鋒",
			ja: "パワーエッジ"
		},

		damage: 140,
		cost: ["Psychic", "Psychic", "Colorless"]
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
	regulationMark: "F"
}

export default card