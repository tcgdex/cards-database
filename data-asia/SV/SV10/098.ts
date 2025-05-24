import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭隊能量",
		'zh-cn': "火箭隊能量",
		ja: "ロケット団エネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "這張卡只可附於「火箭隊的寶可夢」身上，若附於「火箭隊的寶可夢」以外的寶可夢身上，則將其丟棄。 只要這張卡附於寶可夢身上，視為提供2個【超】【惡】2種屬性的能量。",
		'zh-cn': "這張卡只可附於「火箭隊的寶可夢」身上，若附於「火箭隊的寶可夢」以外的寶可夢身上，則將其丟棄。 只要這張卡附於寶可夢身上，視為提供2個【超】【惡】2種屬性的能量。",
		ja: "このカードは「ロケット団のポケモン」にしかつけられず、「ロケット団のポケモン」以外についているなら、トラッシュする。\n\nこのカードは、ポケモンについているかぎり、の2つのタイプのエネルギー2個ぶんとしてはたらく。"
	},

	energyType: "Special",
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card