import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キャモメ"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [278],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "上昇 気流に 乗って グライダーのように 大空を 舞い くちばしに 挟んだ エサを運ぶ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "かぜおこし"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746528,
				tcgplayer: 567547,
				cardtrader: 269791,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577378,
			},
		},
	]
}

export default card
