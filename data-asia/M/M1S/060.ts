import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ミツルの思いやり"
	},
	illustrator: "Iori Suzuki",
	category: "Trainer",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840619,
				tcgplayer: 647221,
			},
		},
	],

	trainerType: "Supporter",
	effect: {
		ja: "自分の「メガシンカex」1匹のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべて手札にもどす。"
	},
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card
