import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "グソクムシャ"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [768],
	hp: 140,
	types: ["Water"],

	description: {
		ja: "海底の 穴や 沈没船が すみか。 オトスパスと 戦い 負けた ほうが エサになるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "パワークロス"
		},

		damage: "20×",

		effect: {
			ja: "相手の手札の枚数×20ダメージ。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "たきのぼり"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card