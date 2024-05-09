import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ユニラン"
	},

	illustrator: "Cona Nitanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [577],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "テレパシーで 意思を 送りあう。 強いショックを 受けると 体を 包む 液体が 漏れ出す。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふいをつく"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card