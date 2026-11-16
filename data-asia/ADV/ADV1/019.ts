import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "キバニア"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [318],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Poke-BODY",

		name: {
			ja: "さめはだ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のワザによるダメージを受けたとき(このポケモンがきぜつしても)、そのワザを使ったポケモンにダメージカウンターを1個のせる。"
		}
	}],

	attacks: [{
		name: {
			ja: "かじりつく"
		},

		effect: {
			ja: "次の相手の番、このワザを受けた相手はにげるができない。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784503,
				tcgplayer: 613085,
				cardtrader: 138003,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784503,
				tcgplayer: 613085,
				cardtrader: 138003,
			},
		},
	]
}

export default card
