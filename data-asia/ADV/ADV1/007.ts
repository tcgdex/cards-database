import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "マユルド"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [268],
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		ja: "ケムッソ"
	},

	stage: "Stage1",

	abilities: [{
		type: "Poke-BODY",

		name: {
			ja: "まゆのから"
		},

		effect: {
			ja: "このポケモンが、相手のワザによるダメージを受けるとき、このポケモンの持ち主はコインを1回投げオモテなら、そのダメージは「-30」される。"
		}
	}],

	attacks: [{
		name: {
			ja: "どくのいと"
		},

		effect: {
			ja: "相手をどくにする。"
		},

		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784491,
				tcgplayer: 613086,
				cardtrader: 137991,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784491,
				tcgplayer: 613086,
				cardtrader: 137991,
			},
		},
	]
}

export default card
