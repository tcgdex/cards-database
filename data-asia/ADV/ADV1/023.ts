import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "エレブーex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [125],
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "ex",

	attacks: [{
		name: {
			ja: "でんきショック"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手をマヒにする。"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			ja: "でんこうせっか"
		},

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージを追加する。"
		},

		damage: "40+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-30"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784507,
				tcgplayer: 613080,
				cardtrader: 138007,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784507,
				tcgplayer: 613080,
				cardtrader: 138007,
			},
		},
	]
}

export default card
