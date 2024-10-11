import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ジヘッド"
	},

	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [634],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "２つの 頭は 好みが 違う。 頭同士 争うことで だれの 力も 借りずに 強くなるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ふみならす"
		},

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "やみのキバ"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card