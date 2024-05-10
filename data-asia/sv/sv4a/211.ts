import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "リザード",
		'zh-tw': "火恐龍",
		id: "Charmeleon"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [5],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "戦いで 気持ちが たかぶると 灼熱の 炎を 吹きながら あたりを 燃やしてまわる。",
		'zh-tw': "如果牠在戰鬥中亢奮起來，就會噴出灼熱的火焰， 把周圍的東西燒得一乾二淨。",
		id: "Ketika pertarungan membuat semangat Charmeleon bergejolak, Pokémon ini meniupkan api berpijar dan membakar daerah sekelilingnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フレアヴェール",
			'zh-tw': "閃焰之幕",
			id: "Tudung Berkobar"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
			id: "Pokémon ini tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "かえん",
			'zh-tw': "烈焰",
			id: "Lidah Api"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card