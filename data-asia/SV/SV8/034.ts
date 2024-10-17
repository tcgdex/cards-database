import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "コイル"
	},

	illustrator: "Hoshino KURO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "空中に 浮いたまま 移動して 左右の ユニットから 電磁波などを 放射する。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ピッカリだま"
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