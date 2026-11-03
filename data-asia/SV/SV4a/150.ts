import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "グルトン"
	},

	illustrator: "Mina Nakai",
	rarity: "None",
	category: "Pokemon",
	dexId: [915],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "一日中 エサを 探す。 優れた 嗅覚を 持つが エサ探し 以外に 使わない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "きまぐれタックル"
		},

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746532,
				tcgplayer: 567551,
				cardtrader: 269786,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577382,
			},
		},
	]
}

export default card
