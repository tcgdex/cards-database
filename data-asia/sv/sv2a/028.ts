import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンドパン",
		'zh-tw': "穿山王"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [28],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "鋭い ツメを ひっかけて 木を 登る。 下で 待つ サンドたちに 木の実を 落とし 分け与えるのだ。",
		'zh-tw': "會用銳利的爪子當作鉤子來爬樹。這是為了將樹果擊落， 分給在樹下等待的穿山鼠們。"
	},

	stage: "Stage1",

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
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "トゲでえぐる",
			'zh-tw': "針裂"
		},

		damage: "80+",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加100點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card