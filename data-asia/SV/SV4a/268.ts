import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ソウブレイズ",
		'zh-tw': "蒼炎刃鬼",
		id: "Ceruledge"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [937],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "両腕の 炎の剣は 志半ばで 力つきた 剣士の 怨念で 燃え上がる。",
		'zh-tw': "雙臂的火焰之劍靠著在得志前就亡命的 劍士怨念而燃燒。",
		id: "Pedang api pada sepasang lengan Ceruledge membara dengan dendam kesatria yang meninggal sebelum tujuannya tercapai."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ライフサッカー",
			'zh-tw': "生命之紗",
			id: "Life Sucker"
		},

		damage: 50,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			id: "Pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "とうしのたいけん",
			'zh-tw': "鬥士的巨劍",
			id: "Pedang Besar Semangat Petarung"
		},

		damage: "100+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、100ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加100點傷害。",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 100."
		}
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
	regulationMark: "G"
}

export default card