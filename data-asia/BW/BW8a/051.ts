import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "プラズマエネルギー"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、[無]エネルギー1個ぶんとしてはたらく。"
	},

	energyType: "Special",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567895, tcgplayer: 602255, cardtrader: 143026 }, stamp: ["1st-edition"] }
	]
}

export default card
