import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピジョン"
	},

	illustrator: "Oswaldo KATO",
	rarity: "None",
	category: "Pokemon",
	dexId: [17],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ポッポ"
	},

	description: {
		ja: "広い 縄張りを 持っており 侵入する 邪魔者は 徹底的に つつかれてしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "はばたく"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746520,
				tcgplayer: 567539,
				cardtrader: 269710,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577374,
			},
		},
	]
}

export default card
