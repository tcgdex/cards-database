import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴウカザル",
		'zh-tw': "烈焰猴"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [392],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "頭で 燃える 炎の ように 激しい 性格の ポケモン。 素早さでは だれにも 負けない。",
		'zh-tw': "性格像頭上燃燒的火焰般激烈。 在速度方面沒有任何 寶可夢可以匹敵。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かえんぶとう",
			'zh-tw': "火焰蹈舞"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」と「基本エネルギー」をそれぞれ1枚まで選び、自分のポケモンに好きなようにつける。",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇「基本【火】能量」卡與「基本【鬥】能量」卡最多各1張，以任意方式附於自己的寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "バーンアウト",
			'zh-tw': "燃燒殆盡"
		},

		damage: 200,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card