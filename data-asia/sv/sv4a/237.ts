import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ライチュウ",
		'zh-tw': "雷丘"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	dexId: [26],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "尻尾が アースの 役目をはたして 電気を 地面に 逃がすので 自分自身は しびれたりしない。",
		'zh-tw': "尾巴會發揮接地線的作用把電氣導入地面， 所以自己不會被電得發麻。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ライアース",
			'zh-tw': "雷之大地"
		},

		effect: {
			ja: "自分のポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、1回使える。きぜつしたポケモンについているエネルギーを1枚選び、このポケモンにつけ替える。",
			'zh-tw': "每次當自己的寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，可使用1次。選擇1張【昏厥】的寶可夢身上附加的【雷】能量卡，改附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "かみなり",
			'zh-tw': "打雷"
		},

		damage: 180,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card