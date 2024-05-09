import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カモネギ"
	},

	illustrator: "KG-2000",
	rarity: "Common",
	category: "Pokemon",
	dexId: [83],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "植物の 茎で 戦う。 茎の 振り方には いくつかの 流派の ようなものが ある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "しょってくる"
		},

		effect: {
			ja: "自分の山札を2枚引く。"
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "ネギでぶつ"
		},

		damage: 30
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