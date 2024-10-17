import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アチゲータ"
	},

	illustrator: "Atsuya Uki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "声帯と 炎袋の 弁は 密接な 関係。 だみ声を 上げながら 炎を 吐き散らす。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ヒートブレス"
		},

		damage: "30＋",

		effect: {
			ja: "コインを1回投げオモテなら、50ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card