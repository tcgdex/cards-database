import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ホエルコ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [320],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "ねむる"
		},

		effect: {
			ja: "自分の特殊状態をすべて回復し、自分のダメージカウンターを4個とりのぞく。その後、自分をねむりにする。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "みずでっぽう"
		},

		effect: {
			ja: "このワザに必要なエネルギーよりも多く{W}エネルギーがついているなら、多い{W}エネルギー×10ダメージを追加する。追加できるダメージは、{W}エネルギー2個ぶんまで。"
		},

		damage: "20+",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784505,
				tcgplayer: 613095,
				cardtrader: 138005,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784505,
				tcgplayer: 613095,
				cardtrader: 138005,
			},
		},
	]
}

export default card
