import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "反擊增幅器",
		'zh-cn': "反擊增幅器",
		ja: "カウンターゲイン"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'zh-tw': "若自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多，則附有這張卡的寶可夢使用招式所需的能量，減少1個【無】能量。",
		'zh-cn': "若自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多，則附有這張卡的寶可夢使用招式所需的能量，減少1個【無】能量。",
		ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードをつけているポケモンがワザを使うためのエネルギーは、エネルギー1個ぶん少なくなる。"
	},

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 787619
	}
}

export default card