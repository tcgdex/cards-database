import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "レガシーエネルギー",
		'zh-tw': "古舊能量"
	},

	category: "Energy",
	illustrator: "5ban Graphics",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。対戦中、自分の「レガシーエネルギー」のこの効果は、1回しかはたらかない。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個所有屬性的能量。 附有這張卡的寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，被獲得的獎賞卡減少1張。對戰中，自己的「古舊能量」的這個效果只生效1次。"
	},

	energyType: "Special",
	regulationMark: "H"
}

export default card
