import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ドレディアV"
	},

	illustrator: "kodama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [549],
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "まいおどる"
		},

		effect: {
			ja: "自分の手札が6枚になるように、山札を引く。"
		},

		cost: []
	}, {
		name: {
			ja: "リーフステップ"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651311,
				tcgplayer: 569824,
				cardtrader: 234207,
			},
		},
	]
}

export default card
