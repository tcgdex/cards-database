import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アローラ ダグトリオ"
	},

	illustrator: "Dsuke",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [51],
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "金属質の 髭は 重いので 素早さは いまいちだが 硬い 岩盤も 掘りぬくパワーを 持つ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "スリービンゴ"
		},

		damage: 120,

		effect: {
			ja: "自分の手札が3枚でないなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2
}

export default card