import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ"
	},

	illustrator: "USGMEN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "どんなときでも ２匹は 一緒。 見つけた エサは ぴったりと 半分こして 仲良く 食べる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "じゃれつく"
		},

		damage: "10＋",

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card