import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハイパーボール"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567902, tcgplayer: 602244, cardtrader: 143033 }, stamp: ["1st-edition"] }
	]
}

export default card
