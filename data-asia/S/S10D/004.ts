import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "シェイミ",
		'zh-tw': "謝米"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [492],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "季節 巡り 厳冬 終わりしこと 喜び 天に 感謝 捧げしとき このポケモン 現れ 枯れし大地を 花で 満たす。",
		'zh-tw': "當人們欣喜於嚴冬隨著季節輪轉而終結， 向上天奉獻感謝之意時，此寶可夢就會 現身，令荒寂的大地開滿鮮花。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "はればれギフト",
			'zh-tw': "晴光之禮"
		},

		effect: {
			ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。自分の山札から好きなカードを3枚まで選び、手札に加える。そして山札を切る。",
			'zh-tw': "這個招式只可在後攻玩家的最初回合使用。從自己的牌庫任意選擇最多3張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "はねまわる",
			'zh-tw': "活蹦亂跳"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650964,
				tcgplayer: 569759,
				cardtrader: 234070,
			},
		},
	]
}

export default card