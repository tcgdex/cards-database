import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴロンダ",
		'zh-tw': "流氓熊貓",
		'zh-cn': "流氓熊貓"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [675],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "葉っぱで 相手の 動きを 読む。 大型 ダンプカーを 一撃で スクラップにする パンチを もつ。",
		'zh-tw': "透過葉子來洞悉敵人的動向。 只要使出一記拳擊就能 讓大型砂石車變成廢鐵。",
		'zh-cn': "透過葉子來洞悉敵人的動向。 只要使出一記拳擊就能 讓大型砂石車變成廢鐵。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "いちゃもん",
			'zh-tw': "無理取鬧",
			'zh-cn': "無理取鬧"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
			'zh-cn': "選擇1個對手的戰鬥寶可夢持有的招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "パワータックル",
			'zh-tw': "力量衝撞",
			'zh-cn': "力量衝撞"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card