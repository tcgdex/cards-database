import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シンボラー"
	},

	illustrator: "svlt",
	category: "Pokemon",
	dexId: [561],
	hp: 110,
	types: ["Psychic"],

	description: {
		'ja-jp': "サイコパワーで 空を 飛ぶ。 古代都市の 守り神 とも その遣いとも いわれている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ダブルドロー"
		},

		effect: {
			'ja-jp': "自分の山札を2枚引く。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ねんりき"
		},

		damage: 60,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
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

	retreat: 1,
	rarity: "None"
}

export default card