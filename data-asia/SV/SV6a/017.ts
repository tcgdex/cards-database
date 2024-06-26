import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "引夢貘人"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "會以固定的節奏擺動著 形影不離的鐘擺。一靠近牠 就會不由自主地昏昏欲睡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "白日夢"
		},

		effect: {
			'zh-tw': "在下個對手的回合，若對手從手牌將能量卡附於受到這個招式的寶可夢身上，則對手的回合結束。"
		},

		damage: 80,
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

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card