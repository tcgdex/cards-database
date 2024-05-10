import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ファイアロー",
		'zh-tw': "烈箭鷹"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [663],
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "飛翔力は トップクラス。 １００キロ以上の 獲物を 掴んだまま 楽々 飛びまわる。",
		'zh-tw': "飛行能力數一數二。能夠攫著１００公斤以上的 獵物輕輕鬆鬆地飛來飛去。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "わしづかみ",
			'zh-tw': "緊抓"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}, {
		cost: ["Fire"],

		name: {
			ja: "れっかのかぜ",
			'zh-tw': "烈火之風"
		},

		damage: "70+",

		effect: {
			ja: "このポケモンにダメカンがのっているなら、90ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card