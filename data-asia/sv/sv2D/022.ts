import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "バチンウニ"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [871],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "エサを 消化するときに 電気を 生みだす。 ５本の 硬い 歯で 海藻を こそぎ落とし 食べる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "しびればり"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		}
	}, {
		cost: ["Lightning"],

		name: {
			ja: "ついげきバリバリ"
		},

		damage: 100,

		effect: {
			ja: "このワザは、前の自分の番に、このポケモンが「しびればり」を使っていなければ使えない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card