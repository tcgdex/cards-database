import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "チョンチー"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [170],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "プラスと マイナスの 電気を 触手の 先から 流す。 敵を 感電させてしまうのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "バチバチ"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567860, tcgplayer: 602203, cardtrader: 142992 }, stamp: ["1st-edition"] }
	]
}

export default card
