import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "カラサリス"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [266],
	hp: 60,
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
			ja: "ねばるいと"
		},

		effect: {
			ja: "次の相手の番、このワザを受けた相手はにげるができない。"
		},

		damage: 10,
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
				cardmarket: 784489,
				tcgplayer: 613092,
				cardtrader: 137989,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784489,
				tcgplayer: 613092,
				cardtrader: 137989,
			},
		},
	]
}

export default card
