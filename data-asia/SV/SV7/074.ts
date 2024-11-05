import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拖拖蚓ex",
		'zh-cn': "拖拖蚓ex",
		ja: "ミミズズex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "岩石封鎖",
			'zh-cn': "岩石封鎖",
			ja: 'がんせきふうじ'
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			ja: '次の相手の番、このワザを受けたポケモンは、にげられない。'
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 4,
	regulationMark: "H",
	rarity: "Double rare",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ボコスカがえし",
			'zh-tw': "‌[特性]快掃拳返",
			'zh-cn': "‌[特性]快掃拳返",
		},

		effect: {
			'zh-tw': "這隻寶可夢受到對手的寶可夢招式的傷害時，將與這隻寶可夢身上附加的【鋼】能量的數量×2個的相同數量的傷害指示物，放置於使用招式的寶可夢身上。",
			'zh-cn': "這隻寶可夢受到對手的寶可夢招式的傷害時，將與這隻寶可夢身上附加的【鋼】能量的數量×2個的相同數量的傷害指示物，放置於使用招式的寶可夢身上。",
			ja: "このポケモンが、相手のポケモンからワザのダメージを受けたとき、このポケモンについているエネルギーの数×2個ぶんのダメカンを、ワザを使ったポケモンにのせる。",
		}
	}]
}

export default card
