import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ガーディ"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [58],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "対になりて 縄張りを 哨戒す。 体毛に 火成岩なる 成分 混ざるは 火山活動の 影響と 推察す。"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "まるやけ"
		},

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "とっしん"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card