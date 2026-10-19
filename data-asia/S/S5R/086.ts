import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	illustrator: "Taira Akitsu",
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "コルニの気合い"
	},
	category: "Trainer",

	effect: {
		ja: "自分の手札が6枚になるように、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538738, tcgplayer: 569127, cardtrader: 240098 } }
	]
}

export default card