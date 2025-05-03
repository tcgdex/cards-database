import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "キラフロル",
		'zh-tw': "晶光花",
		'zh-cn': "晶光花"
	},

	illustrator: "takashi shiraishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [970],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "毒エネルギーが 結晶化した 花びらは テラスタルの 宝石に 似ていると 最近 判明した。",
		'zh-tw': "最近發現牠的毒能量 結晶化後所形成的花瓣 與太晶的寶石類似。",
		'zh-cn': "最近發現牠的毒能量 結晶化後所形成的花瓣 與太晶的寶石類似。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "むしばむはへん",
			'zh-tw': "侵蝕碎塊",
			'zh-cn': "侵蝕碎塊"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、手札から出すエネルギーをつけられない。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢，無法附上從手牌使出的能量卡。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢，無法附上從手牌使出的能量卡。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "いわおとし",
			'zh-tw': "落石",
			'zh-cn': "落石"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card