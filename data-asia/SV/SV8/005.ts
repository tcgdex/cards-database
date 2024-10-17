import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "コフーライ"
	},

	illustrator: "tono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [665],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "決まった 棲み処を 持たない。 気の向くまま 野山を 歩きまわり 進化の エネルギーを 蓄える。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "あるきまわる"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "たいあたり"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card