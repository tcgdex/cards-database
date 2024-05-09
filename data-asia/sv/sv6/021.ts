import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "シャンデラ"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "saino misaki",
	dexId: [609],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "魂を 吸い取って 燃やす。 腕の 炎を 揺らして 相手を 催眠状態に する。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いざなうあかり"
		},

		effect: {
			ja: "自分の番に1回使える。おたがいのプレイヤーは、それぞれ山札を1枚引く。"
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "マインドルーラー"
		},

		damage: "30×",

		effect: {
			ja: "相手の手札の枚数×30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card
