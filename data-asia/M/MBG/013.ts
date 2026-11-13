import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "プライムキャッチャー"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、自分のバトルポケモンをベンチポケモンと入れ替える。"
	},

	trainerType: "Item",
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 846830,
				tcgplayer: 654130,
				cardtrader: 345821,
			},
		},
	]
}

export default card
