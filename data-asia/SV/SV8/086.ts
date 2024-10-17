import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "カクレオン"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [352],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "身体の 色を 変えて 景色に 溶け込む。 長く かまわないでいると スネて 姿を 見せなくなる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かくれじょうず"
		},

		effect: {
			ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ベロウィップ"
		},

		effect: {
			ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card