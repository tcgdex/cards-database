import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ローブシン"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Takeshi Nakamura",
	dexId: [534],
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "力に 頼らず 遠心力を うまく 活かして コンクリートを 振り回す 技を 使いこなせる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれまわる"
		},

		damage: 80,

		effect: {
			ja: "このポケモンをこんらんにする。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ガッツスイング"
		},

		damage: 250,

		effect: {
			ja: "このワザは、このポケモンが特殊状態なら、このワザを使うためのエネルギーがこのポケモンについていなくても、使える。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card
