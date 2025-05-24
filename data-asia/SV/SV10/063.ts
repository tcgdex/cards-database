import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>尼多王ex",
		'zh-cn': "<火箭隊的>尼多王ex",
		ja: "ロケット団のニドキングex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "惡劣角擊",
			'zh-cn': "惡劣角擊",
			ja: "ダーティホーン"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為8個。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為8個。",
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は8個になる。"
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "王者衝擊",
			'zh-cn': "王者衝擊",
			ja: "キングインパクト"
		},

		damage: 240,
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Double rare"
}

export default card