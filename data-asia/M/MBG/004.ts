import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤミカラス"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	dexId: [198],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "夜 姿を 見かけると 不吉なことが 起きると 信じられ 忌み嫌われている ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "おそいかかる"
		},

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		},

		damage: "10+",
		cost: ["Darkness"]
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
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846821,
				tcgplayer: 660121,
				cardtrader: 345812,
			},
		},
	]
}

export default card
