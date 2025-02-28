import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのバチュル",
		'zh-tw': "N的電電蟲",
		'zh-cn': "N的電電蟲"
	},

	illustrator: "Iori Suzuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [595],
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "自分では 電気を つくれないので ほかの 大きな ポケモンに とりつき 静電気を 吸いとる。",
		'zh-tw': "自己無法製造電力， 會附在其他大型寶可夢身上 吸取靜電。",
		'zh-cn': "自己無法製造電力， 會附在其他大型寶可夢身上 吸取靜電。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "バチバチショート",
			'zh-tw': "劈哩啪啦短路",
			'zh-cn': "劈哩啪啦短路"
		},

		damage: 30,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。トラッシュした場合、相手のバトルポケモンをマヒにする。",
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。有丟棄的情況下，將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。有丟棄的情況下，將對手的戰鬥寶可夢【麻痺】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card