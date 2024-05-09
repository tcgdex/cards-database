import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ファイアロー"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [663],
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "飛翔力は トップクラス。 １００キロ以上の 獲物を 掴んだまま 楽々 飛びまわる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "わしづかみ"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}, {
		cost: ["Fire"],

		name: {
			ja: "れっかのかぜ"
		},

		damage: "70＋",

		effect: {
			ja: "このポケモンにダメカンがのっているなら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card