import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "磨牙彩皮魚",
		'zh-cn': "磨牙彩皮魚",
		ja: "ハギギシリ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "磨牙時會泛起波紋。當陽光 反射在上面時，周圍的水會 閃起令人目眩神迷的亮光。",
		'zh-cn': "磨牙時會泛起波紋。當陽光 反射在上面時，周圍的水會 閃起令人目眩神迷的亮光。",
		ja: "歯ぎしりで 起こる 波紋に 陽の光が 反射するとき まわりの 水は 眩いばかりに きらめく。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "反擊",
			'zh-cn': "反擊",
			ja: "はんげき"
		},

		effect: {
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			'zh-cn': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "咬緊",
			'zh-cn': "咬緊",
			ja: "かじりつく"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [779],

	thirdParty: {
		cardmarket: 787572
	}
}

export default card