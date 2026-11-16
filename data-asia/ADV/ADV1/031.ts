import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴマゾウ"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "ふむ"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "じめんをゆらす"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモン全員に、それぞれ10ダメージを与え、それぞれマヒにする。"
		},

		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784515,
				tcgplayer: 613045,
				cardtrader: 138015,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784515,
				tcgplayer: 613045,
				cardtrader: 138015,
			},
		},
	]
}

export default card
