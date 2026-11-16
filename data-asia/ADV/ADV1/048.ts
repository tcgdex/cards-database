import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "グラエナ"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [262],
	hp: 70,
	types: ["Darkness"],

	evolveFrom: {
		ja: "ポチエナ"
	},

	stage: "Stage1",

	abilities: [{
		type: "Poke-BODY",

		name: {
			ja: "いかくのキバ"
		},

		effect: {
			ja: "相手のワザによるダメージは、このポケモンがバトル場にいるかぎり、すべて「-10」される。"
		}
	}],

	attacks: [{
		name: {
			ja: "おどしとる"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の手札から、オモテを見ないでカードを1枚選び出し、トラッシュする。"
		},

		damage: 40,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784532,
				tcgplayer: 613062,
				cardtrader: 138032,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784532,
				tcgplayer: 613062,
				cardtrader: 138032,
			},
		},
	]
}

export default card
