import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "陳舊的背蓋化石",
		'zh-cn': "陳舊的背蓋化石",
		ja: "古びたふたの化石"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡可作為HP60的【無】屬性的【基礎】寶可夢放置於場上。這張卡不會陷入特殊狀態，無法撤退。 若在自己的回合中，則可將場上的這張卡丟棄。",
		'zh-cn': "這張卡可作為HP60的【無】屬性的【基礎】寶可夢放置於場上。這張卡不會陷入特殊狀態，無法撤退。 若在自己的回合中，則可將場上的這張卡丟棄。",
		ja: "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。\n自分の番の中でなら、場に出ているこのカードをトラッシュできる。"
	},

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Common",
	hp: 60
}

export default card