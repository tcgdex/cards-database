import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "營火專家",
		ja: "キャンプファイヤー"
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須從自己的手牌將1張【火】能量卡丟棄才可使用。 查看自己的牌庫上方7張卡，從其中選擇最多2張卡加入手牌。將剩餘卡放回牌庫並重洗。",
		ja: "このカードは、自分の手札からエネルギーを1枚トラッシュしなければ使えない。\n\n自分の山札を上から7枚見て、その中からカードを2枚まで選び、手札に加える。残りのカードは山札にもどして切る。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card