import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ベトベトン",
		'zh-tw': "臭臭泥"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [89],
	hp: 150,
	types: ["Darkness"],

	description: {
		ja: "汚い ヘドロが 全身に まとわりつく。 足跡に 触っただけで 毒に 侵される。",
		'zh-tw': "全身上下沾滿污泥。光是碰到牠的足跡， 都會受到毒素的侵襲。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ベトベトジェイル",
			'zh-tw': "臭臭獄"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーとにげるためのエネルギーが、それぞれエネルギー1個ぶん多くなる。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量與【撤退】所需的能量，各增加1個【無】能量。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ヘドロばくだん",
			'zh-tw': "污泥炸彈"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card