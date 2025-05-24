import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのウソッキー",
		'zh-tw': "<阿響的>樹才怪",
		'zh-cn': "<阿響的>樹才怪"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [185],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "いつも 木のふりを している。 体の つくりは 植物より 石や 岩などに 近いようだ。",
		'zh-tw': "總是偽裝成樹的樣子。 身體構造比起植物來， 好像更接近石頭或岩石之類的東西。",
		'zh-cn': "總是偽裝成樹的樣子。 身體構造比起植物來， 好像更接近石頭或岩石之類的東西。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かこいこむ",
			'zh-tw': "圍困",
			'zh-cn': "圍困"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "まねてみる",
			'zh-tw': "試著模仿",
			'zh-cn': "試著模仿"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンが持つワザを1つ選び、このワザとして使う。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。",
			'zh-cn': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card