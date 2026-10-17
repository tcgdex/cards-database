import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "れんげきエネルギー"
	},

	category: "Energy",

	effect: {
		ja: "このカードは「れんげき」のポケモンにしかつけられず、「れんげき」のポケモン以外についているなら、トラッシュする。\n\nこのカードは、ポケモンについているかぎり、[水][闘]の2つのタイプのエネルギー2個ぶんとしてはたらく。"
	},

	energyType: "Special",
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: {
			cardmarket: 538763, tcgplayer: 569131, cardtrader: 240103 } }
	]
}

export default card