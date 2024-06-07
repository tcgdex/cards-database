import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイロス"
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	dexId: [127],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "ツノで 互いを 格付けする。 太く 立派な ツノを 持つ カイロスほど 異性に 人気。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "スロークランチ"
		},

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番の終わりに、このワザを受けたポケモンはきぜつする。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "かいりきホーン"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card