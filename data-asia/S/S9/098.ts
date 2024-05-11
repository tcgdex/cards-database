import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "崩塌的競技場",
		ja: "崩れたスタジアム"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家的可放置於備戰區的寶可夢數量改為4隻。[變更備戰寶可夢數量的效果，以變少者為優先。] （將這張卡放置於場上時，備戰寶可夢有5隻以上的玩家，將其丟棄直到變為4隻為止。這張卡的持有人先丟棄。）",
		ja: "おたがいのプレイヤーがベンチに出せるポケモンの数は、4匹になる。［ベンチの数を変更する効果は、少ない数が優先される。］\n\n（このカードが場に出たとき、ベンチが5匹以上いるプレイヤーは、4匹になるまでトラッシュする。トラッシュするのは、このカードの持ち主から。）"
	},

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card