import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "古びたかいの化石",
		'zh-tw': "陳舊的貝殼化石"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	hp: 60,

	effect: {
		ja: "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。\n自分の番の中でなら、場に出ているこのカードをトラッシュできる。",
		'zh-tw': "這張卡可作為HP60的【無】屬性的【基礎】寶可夢放置於場上。這張卡不會陷入特殊狀態，無法撤退。若在自己的回合中，則可將場上的這張卡丟棄。 [特性]貝殼潮漩 只要這隻寶可夢在戰鬥場上，對手無法從手牌使出競技場卡。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card