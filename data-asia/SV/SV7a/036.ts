import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼龍",
		'zh-cn': "鋁鋼龍",
		ja: "ジュラルドン"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "金屬構成的身體雖然堅固 但無法散熱，因此牠會從 尾巴上的縫隙排出熱氣。",
		'zh-cn': "金屬構成的身體雖然堅固 但無法散熱，因此牠會從 尾巴上的縫隙排出熱氣。",
		ja: "金属の ボディは 頑丈だが 熱が こもってしまうので 尻尾の スリットから 放熱している。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "正面對決",
			'zh-cn': "正面對決",
			ja: "がちんこ"
		},

		damage: 50,
		cost: ["Metal", "Metal"]
	}, {
		name: {
			'zh-tw': "鋁鋼光束",
			'zh-cn': "鋁鋼光束",
			ja: "ジュラルビーム"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},

		damage: 130,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [884]
}

export default card