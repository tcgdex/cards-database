import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シママ"
	},

	illustrator: "kamonabe",
	rarity: "Common",
	category: "Pokemon",
	dexId: [522],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "落雷の 多い 土地を 好む。 たてがみで 雷を 受け止め 体に 電気を 溜めこむのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くわえる"
		},

		effect: {
			ja: "自分の山札を1枚引く。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "バチバチ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card