import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "セキ",
		'zh-tw': "剛石"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札から{M}エネルギーを2枚トラッシュしなければ使えない。自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡必須從自己的手牌將2張【鋼】能量卡丟棄才可使用。從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651032,
				tcgplayer: 569819,
				cardtrader: 234202,
			},
		},
	]
}

export default card