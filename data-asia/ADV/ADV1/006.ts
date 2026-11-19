import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "アゲハント"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [267],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		ja: "カラサリス"
	},

	stage: "Stage2",

	abilities: [{
		type: "Poke-BODY",

		name: {
			ja: "だつりょくりんぶん"
		},

		effect: {
			ja: "このポケモンがいるかぎり、おたがいのバトルポケモン全員の抵抗力は、すべてなくなる。"
		}
	}],

	attacks: [{
		name: {
			ja: "しびれごな"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手をマヒにする。"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			ja: "パラレルゲイン"
		},

		effect: {
			ja: "自分のポケモン全員のダメージカウンターを、それぞれ1個ずつとりのぞく。"
		},

		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784490,
				tcgplayer: 613054,
				cardtrader: 137990,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784490,
				tcgplayer: 613054,
				cardtrader: 137990,
			},
		},
	]
}

export default card
