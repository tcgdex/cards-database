import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "富裕能量",
		'zh-cn': "富裕能量",
		ja: "リッチエネルギー"
	},

	illustrator: "5ban Graphics",
	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 從手牌將這張卡附於寶可夢身上時，從自己的牌庫抽出4張卡。",
		'zh-cn': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 從手牌將這張卡附於寶可夢身上時，從自己的牌庫抽出4張卡。",
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からポケモンにつけたとき、自分の山札を4枚引く。"
	},

	energyType: "Special",
	regulationMark: "H",
	rarity: "None"
}

export default card