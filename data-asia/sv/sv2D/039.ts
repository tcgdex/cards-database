import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ナマズン"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [340],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "縄張り意識が とても 強く 外敵が 近づくと 激しく 地面を 揺らして 襲いかかる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれてゆらす"
		},

		effect: {
			ja: "このポケモンについているエネルギーの数ぶん、相手の山札を上からトラッシュする。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ランドクラッシュ"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card