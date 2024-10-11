import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス"
	},

	illustrator: "Taiga Kasai",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "高温の 鼻息を 吹きだすので ブレイズ種と 名づけられた。 ３本の 尻尾を 束ねている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "うしろげり"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "きあいタックル"
		},

		damage: "90＋",

		effect: {
			ja: "相手のバトルポケモンが1進化ポケモンなら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card