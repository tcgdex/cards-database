import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "タイカイデン"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋に 翼で 作った 電気を 溜める。 羽の 油分が とても 少なく 泳ぎは 苦手。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かっくう"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "ストームボルト"
		},

		damage: 160,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。"
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

	retreat: 1
}

export default card