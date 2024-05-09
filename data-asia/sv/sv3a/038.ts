import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ズルズキン"
	},

	illustrator: "Mousho",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [560],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "とても 荒っぽい 性格だが 家族や 仲間や 縄張りは 大切にする ところがある。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どやす"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ヘッドバング"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card