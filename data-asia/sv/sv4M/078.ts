import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノコウベ"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [993],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "古い 書物に 記された テツノコウベという 物体は このポケモンかも しれない。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ホーミングヘッド"
		},

		effect: {
			ja: "ダメカンがのっている相手のポケモン3匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "バリオンビーム"
		},

		damage: 150,

		effect: {
			ja: "このワザは、このポケモンに「ブーストエナジー 未来」がついているなら、エネルギー3個で使える。"
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

	retreat: 2
}

export default card