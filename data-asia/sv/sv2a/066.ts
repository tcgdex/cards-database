import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワンリキー"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	dexId: [66],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "いつも パワフル。 体力が 有り余っているので 暇つぶしに 岩を持ち上げ さらに 強くなる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "やまたたき"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "パンチ"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card