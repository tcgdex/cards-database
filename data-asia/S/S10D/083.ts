import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "セキ"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札から{M}エネルギーを2枚トラッシュしなければ使えない。自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651325,
				tcgplayer: 569838,
				cardtrader: 234225,
			},
		},
	]
}

export default card
