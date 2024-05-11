import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		ja: "レジエレキVMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "トランジスタ"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のタイプのたねポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ダイライデン"
		},

		damage: 220,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0
}

export default card