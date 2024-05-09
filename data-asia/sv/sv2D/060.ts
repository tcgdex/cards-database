import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "リキキリン"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [981],
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "頭と 尻尾の ２つの 脳波が 同期したことで エスパーパワーは キリンリキの １０倍 アップした。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どっちかフェイス"
		},

		effect: {
			ja: "自分または相手のどちらかを選び、選ばれたプレイヤーは、手札をすべて山札にもどして切る。その後、選ばれたプレイヤーは山札を4枚引く。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パワービーム"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card