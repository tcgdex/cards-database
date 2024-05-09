import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "コリンク"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Yuu Nishida",
	dexId: [403],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "筋肉が 伸び縮み することで 電気が 発生。 ピンチになると 体毛が まぶしく 光る。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こうきしん"
		},

		effect: {
			ja: "相手の手札を見る。"
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "バチバチ"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card
