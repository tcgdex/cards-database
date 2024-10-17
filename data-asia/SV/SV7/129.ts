import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麻花犬ex",
		'zh-cn': "麻花犬ex",
		ja: "バウッツェルex"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "奇跡閃耀",
			'zh-cn': "奇跡閃耀",
			ja: 'ワンダーシャイン'
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。",
			ja: '相手のバトルポケモンをこんらんにする。'
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まんぷくタイム",
			'zh-tw': "‌[特性]飽腹時間",
			'zh-cn': "‌[特性]飽腹時間"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。將自己的所有進化寶可夢的HP全部恢復。然後，將恢復的寶可夢身上附加的能量全部丟棄。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。將自己的所有進化寶可夢的HP全部恢復。然後，將恢復的寶可夢身上附加的能量全部丟棄。",
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の進化ポケモン全員のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。"
		}
	}],

	rarity: "None"
}

export default card
