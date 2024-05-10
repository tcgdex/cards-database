import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "マーイーカ",
		'zh-tw': "好啦魷"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [686],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "敵に 発光体の 点滅を 浴びせて 戦意を なくしてしまう。 その 隙に 逃げ出すのだ。",
		'zh-tw': "會讓敵人看到自己閃爍的發光體來讓對方喪失戰意，然後趁機逃之夭夭。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "だきつく",
			'zh-tw': "緊抱"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
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