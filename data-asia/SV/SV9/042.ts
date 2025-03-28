import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "リーリエのアブリボン",
		'zh-tw': "莉莉艾的蝶結萌虻",
		'zh-cn': "莉莉艾的蝶結萌虻"
	},

	illustrator: "mashu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [743],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "落ちこんでいる 人や ポケモンの 気持ちを 感じ取っては 手作りの 花粉団子で 元気づけたりする。",
		'zh-tw': "只要感覺到人類或寶可夢 沮喪的情緒，就會送上 自製的花粉團來為其打氣。",
		'zh-cn': "只要感覺到人類或寶可夢 沮喪的情緒，就會送上 自製的花粉團來為其打氣。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おさそいウインク",
			'zh-tw': "邀請眨眼",
			'zh-cn': "邀請眨眼"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札を見て、その中からたねポケモンを好きなだけ選び、相手のベンチに出す。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看對手的手牌，從其中選擇任意數量的【基礎】寶可夢卡，放置於對手的備戰區。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看對手的手牌，從其中選擇任意數量的【基礎】寶可夢卡，放置於對手的備戰區。"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "マジカルショット",
			'zh-tw': "魔法射擊",
			'zh-cn': "魔法射擊"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card