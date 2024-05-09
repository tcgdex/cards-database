import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ソウブレイズ"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [937],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "両腕の 炎の剣は 志半ばで 力つきた 剣士の 怨念で 燃え上がる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ライフサッカー"
		},

		damage: 50,

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "とうしのたいけん"
		},

		damage: "100＋",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、100ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card