import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "オーロット",
		'zh-tw': "朽木妖"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [709],
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "足の 先から 細い 根っこを 伸ばして 森の 木々と 結びつき 自在に 操る 力を もつ。",
		'zh-tw': "腳尖伸出來的根鬚能連結森林中的樹木，並且自由自在地加以操縱。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もりのしょうき",
			'zh-tw': "森林瘴氣"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、ポケモンチェックのたび、相手のバトルポケモンにダメカンを1個のせる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，每次寶可夢檢查時，在對手的戰鬥寶可夢身上放置1個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とじこめる",
			'zh-tw': "禁錮"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card