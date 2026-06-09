import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍捲雲",
		'zh-cn': "龍捲雲",
		ja: "トルネロス"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "下半身被雲一般的能量包裹著。 能以時速３００公里的速度 在空中飛行。",
		'zh-cn': "下半身被雲一般的能量包裹著。 能以時速３００公里的速度 在空中飛行。",
		ja: "雲のような エネルギー体に 下半身が 包まれている。 時速３００キロで 空を 飛ぶ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拳骨",
			'zh-cn': "拳骨",
			ja: "げんこつ"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "暴風障壁",
			'zh-cn': "暴風障壁",
			ja: "ぼうふうしょうへき"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [641],

	thirdParty: {
		cardmarket: 779096
	}
}

export default card