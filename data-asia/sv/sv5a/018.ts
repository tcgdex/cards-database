import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーユイ",
		'zh-tw': "古玉魚"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1004],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "多くの 争いの 火種となった 勾玉に 集まった 妬みが 炎を まとい ポケモンとなった。",
		'zh-tw': "曾引起無數鬥爭的勾玉聚集了 嫉妒之情。這些嫉妒之情 纏繞了火焰，變成了寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひきつける",
			'zh-tw': "吸引"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "グラウンドメルト",
			'zh-tw': "大地熔化"
		},

		damage: "60+",

		effect: {
			ja: "場にスタジアムが出ているなら、60ダメージ追加。その後、そのスタジアムをトラッシュする。",
			'zh-tw': "若場上有競技場卡，則增加60點傷害。然後，將那張競技場卡丟棄。"
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