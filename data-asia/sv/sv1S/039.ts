import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "チャーレム",
		'zh-tw': "恰雷姆"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [308],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測する ことが できるのだ。",
		'zh-tw': "可以用藉由瑜珈修行鍛鍊出來的精神力量， 來預測對手的行動。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ツボをねらう",
			'zh-tw': "點穴"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。"
		}
	}, {
		cost: ["Fighting"],

		name: {
			ja: "いっぱつげり",
			'zh-tw': "單次踢"
		},

		damage: 90,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card