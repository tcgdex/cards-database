import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "チリーン"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Mousho",
	dexId: [358],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "鳴き声は 体の 空洞で 響き合って きれいな 音色になり 敵を驚かせ 追いはらう。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ハイパーボイス"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おかえりチャイム"
		},

		effect: {
			ja: "自分のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。"
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
