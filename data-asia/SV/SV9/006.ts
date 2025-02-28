import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "マラカッチ",
		'zh-tw': "沙鈴仙人掌",
		'zh-cn': "沙鈴仙人掌"
	},

	illustrator: "Dsuke",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [556],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "１年に 一度 種を まく。 花の 種は 栄養満点で 砂漠の 貴重な 食料。",
		'zh-tw': "一年散播一次種子。 花的種子營養十足， 是沙漠中貴重的食糧。",
		'zh-cn': "一年散播一次種子。 花的種子營養十足， 是沙漠中貴重的食糧。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さくれつばり",
			'zh-tw': "炸裂針",
			'zh-cn': "炸裂針"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを6個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【昏厥】時，在使用招式的寶可夢身上放置6個傷害指示物。",
			'zh-cn': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【昏厥】時，在使用招式的寶可夢身上放置6個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おいつめる",
			'zh-tw': "窮追不捨",
			'zh-cn': "窮追不捨"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card