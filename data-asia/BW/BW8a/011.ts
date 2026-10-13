import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "シードラ"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	dexId: [117],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		ja: "タッツー"
	},

	description: {
		ja: "トゲが 敵から 身を 守る。 ヒレや ホネが 漢方薬の 材料として 重宝される。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "えんまく"
		},

		effect: {
			ja: "次の相手の番、このワザを受けた相手のバトルポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567852, tcgplayer: 602222, cardtrader: 142986 }, stamp: ["1st-edition"] }
	]
}

export default card
