import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "カイデン"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [940],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "海岸の 崖に 巣を 作る。 巣は パチパチ 弾ける 不思議な 食感で 人気の 珍味。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "つばめがえし"
		},

		damage: "10＋",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card