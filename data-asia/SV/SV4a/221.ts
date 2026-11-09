import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトデマン",
		'zh-tw': "海星星",
		id: "Staryu"
	},

	illustrator: "Nisota Niso",
	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [120],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "魚ポケモンに ついばまれるが 体が ちぎれても すぐに 再生するので 気にしない。",
		'zh-tw': "會被魚寶可夢啄食，但是即使身體被咬斷也能很快就 再生，所以一點都不在意。",
		id: "Meskipun tubuhnya putus tercabik karena digigit oleh Pokémon ikan, Staryu tidak peduli karena tubuhnya akan segera tumbuh kembali."
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "スピードスター",
			'zh-tw': "高速星星",
			id: "Speed Star"
		},

		effect: {
			ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747575,
				tcgplayer: 567622,
				cardtrader: 270229,
			},
		},
	]
}

export default card