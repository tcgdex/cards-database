import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン いしずえのめんex",
		id: "Ogerpon Topeng Fondasi ex",
		'zh-tw': "厄鬼椪 礎石面具ex",
		'zh-cn': "厄鬼椪 礎石面具ex"
	},

	illustrator: "Yukihiro Tada",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いしずえのかまえ",
			id: "Kuda-kuda Fondasi",
			'zh-tw': "礎石之勢",
			'zh-cn': "礎石之勢"
		},

		effect: {
			ja: "このポケモンは、相手の特性を持つポケモンからワザのダメージを受けない。",
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon lawan yang memiliki Ability.",
			'zh-tw': "這隻寶可夢不會受到對手的擁有特性的寶可夢招式的傷害。",
			'zh-cn': "這隻寶可夢不會受到對手的擁有特性的寶可夢招式的傷害。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ぶちやぶる",
			id: "Memecah Penuh Tenaga",
			'zh-tw': "打爆",
			'zh-cn': "打爆"
		},

		damage: 140,

		effect: {
			ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon Bertarung lawan.",
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card