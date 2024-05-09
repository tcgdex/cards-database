import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ポチエナ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Shibuzoh.",
	dexId: [261],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "群れで 獲物を 追いかけまわす。 疲れきったところを 仕留めるが たまに 反撃されて 逃げだす。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "れんぞくステップ"
		},

		damage: "10×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×10ダメージ。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "やみのキバ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card
