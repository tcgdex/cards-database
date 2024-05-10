import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "モルペコ",
		'zh-tw': "莫魯貝可"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "胃袋が 小さいので ポケットに 入れた タネを いつも 食べてないと すぐに お腹が 空いてしまうのだ。",
		'zh-tw': "胃很小，所以如果不一直 拿口袋裡的種子來吃的話， 馬上就會因空腹而感到餓。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おやつさがし",
			'zh-tw': "搜尋點心"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードをトラッシュする。",
			'zh-tw': "在自己的回合時可使用1次。查看自己的牌庫上方1張卡，回復原樣。若希望，將那張卡丟棄。"
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ひろってつける",
			'zh-tw': "撿拾附上"
		},

		effect: {
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。",
			'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card