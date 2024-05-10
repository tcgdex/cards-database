import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ベトベター",
		'zh-tw': "臭泥"
	},

	illustrator: "Nisota Niso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [88],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヘドロが ポケモンになった。 汚い 場所に 集まって 体の ばい菌を 増やしていく。",
		'zh-tw': "污泥變成的寶可夢。會聚集在骯髒的地方 來繁殖身體的細菌。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "べっとりプレス",
			'zh-tw': "緊貼壓制"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげるためのエネルギーが、1個ぶん多くなる。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢【撤退】所需的能量增加1個。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card