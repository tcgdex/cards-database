import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンドパン"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [28],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "鋭い ツメを ひっかけて 木を 登る。 下で 待つ サンドたちに 木の実を 落とし 分け与えるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "じひびき"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "トゲでえぐる"
		},

		damage: "80＋",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card