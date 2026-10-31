import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "オタマロ"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	dexId: [535],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "ほほの 振動膜を 震わせ 人には きこえない 音波を だし 仲間たちに 危険を 伝える。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ふいをつく"
		},

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567856, tcgplayer: 602225, cardtrader: 142988 }, stamp: ["1st-edition"] }
	]
}

export default card
