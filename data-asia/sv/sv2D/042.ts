import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "マケンカニ"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [739],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "木を 殴りつけ 木の実を 落として 食べる。 トレーニングしつつ エサも 採れて 一石二鳥 なのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "げんこつ"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マグナムパンチ"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card