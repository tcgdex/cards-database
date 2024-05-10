import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "カモネギ",
		'zh-tw': "大蔥鴨"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "miki kudo",
	dexId: [83],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "羽で もつ 茎を 刀のように 操り 敵を 切り捨てる。 いざと いうときは エサに する。",
		'zh-tw': "會將翅膀所拿的莖狀植物 當成劍一般去劈砍對手。 在非常時期會拿它當作食物。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でたとこせおい",
			'zh-tw': "臨場背負"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から「ポケモンのどうぐ」を1枚選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇1張「寶可夢道具」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おんそくぎり",
			'zh-tw': "音速斬"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card