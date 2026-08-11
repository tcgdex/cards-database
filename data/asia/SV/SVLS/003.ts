import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ホウオウ"
	},

	illustrator: "kodama",
	category: "Pokemon",
	dexId: [250],
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "体は 七色に 輝き 飛んだあとは 虹が できると 神話に 残されている ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "はばたく"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "シャインブレイズ"
		},

		damage: "100＋",

		effect: {
			'ja-jp': "自分のベンチに「テラスタル」のポケモンがいるなら、100ダメージ追加。"
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

	retreat: 2,
	rarity: "None"
}

export default card