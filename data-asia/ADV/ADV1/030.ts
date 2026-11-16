import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "エビワラーex"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [107],
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "ex",

	attacks: [{
		name: {
			ja: "ワンツーパンチ"
		},

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージを追加する。"
		},

		damage: "10+",
		cost: ["Fighting"]
	}, {
		name: {
			ja: "スカイアッパー"
		},

		effect: {
			ja: "このワザは、相手の抵抗力に関係なく、ダメージを与える。"
		},

		damage: 50,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784514,
				tcgplayer: 613081,
				cardtrader: 138014,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784514,
				tcgplayer: 613081,
				cardtrader: 138014,
			},
		},
	]
}

export default card
