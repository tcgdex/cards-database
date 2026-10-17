import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "タッツー"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [116],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "サンゴの 陰に 住処を 作る。 危険を 感じると 口から 真っ黒い 墨を 吐いて 逃げる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ひれビンタ"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。"
		},

		damage: "10×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567850, tcgplayer: 602208, cardtrader: 142985 }, stamp: ["1st-edition"] }
	]
}

export default card
