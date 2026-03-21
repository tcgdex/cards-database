import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈箭鷹",
		'zh-cn': "烈箭鷹",
		ja: "ファイアロー"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'zh-tw': "一旦興奮就會從羽毛間 噴出火花。不會燒焦的 羽毛會被當成防火材利用。",
		'zh-cn': "一旦興奮就會從羽毛間 噴出火花。不會燒焦的 羽毛會被當成防火材利用。",
		ja: "興奮すると 羽毛の 隙間から 火の粉を 吹く。 焦げない 羽毛は 防火素材として 利用される。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "氣旋競爭",
			'zh-cn': "氣旋競爭",
			ja: "エアロチェイス"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【撤退】所需的能量為2個以上，則增加110點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢【撤退】所需的能量為2個以上，則增加110點傷害。",
			ja: "相手のバトルポケモンのにげるためのエネルギーが2個以上なら、110ダメージ追加。"
		},

		damage: "110＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [663],

	thirdParty: {
		cardmarket: 779099
	}
}

export default card