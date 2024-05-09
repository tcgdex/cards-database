import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ミカルゲ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [442],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "１０８個の 魂で できている。 二度と 悪さを しないように 要石に 縛りつけられている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ちょうはつ"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "ほろびのせんこく"
		},

		effect: {
			ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをきぜつさせる。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card