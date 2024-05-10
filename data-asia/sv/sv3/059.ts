import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "マッギョ",
		'zh-tw': "泥巴魚"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [618],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "体の 黄色い 模様から 強い 電気を 放つとき なぜか すこし 微笑んでいる。",
		'zh-tw': "當從身上的黃色斑紋裡釋放出強大電流時，牠會莫名地露出微笑。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "カスタムトラップ",
			'zh-tw': "特製陷阱"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、このポケモンに「ポケモンのどうぐ」がついているなら、ワザを使ったポケモンにダメカンを5個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，若這隻寶可夢身上附有「寶可夢道具」卡，則在使用招式的寶可夢身上放置5個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "じひびき",
			'zh-tw': "地鳴"
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

	retreat: 3,
	regulationMark: "G"
}

export default card