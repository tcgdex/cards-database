import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ウソッキー",
		'zh-tw': "樹才怪"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [185],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "いつも 木のふりを している。 体の つくりは 植物より 石や 岩などに 近いようだ。",
		'zh-tw': "總是偽裝成樹的樣子。身體構造比起植物來， 好像更接近石頭或岩石之類的東西。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "なぐってかくれる",
			'zh-tw': "打擊躲藏"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ひじうち",
			'zh-tw': "肘擊"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card