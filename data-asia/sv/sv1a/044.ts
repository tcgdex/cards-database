import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ディグダ",
		'zh-tw': "地鼠"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 50,
	types: ["Fighting"],

	description: {
		ja: "地下１メートルくらいを 掘りすすみ 木の根っこなどを かじって 生きる。 たまに 地上に 顔を出す。",
		'zh-tw': "在大約１公尺深的地底挖洞前進，靠啃食樹根之類的東西生存。 偶爾會到地面上露個臉。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あなあけヘッド",
			'zh-tw': "開洞頭擊"
		},

		damage: 30,

		effect: {
			ja: "自分の山札を上から1枚トラッシュする。",
			'zh-tw': "將自己的牌庫上方1張卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card