import { Card } from "models/database/card"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ニンフィアex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "マジカルチャーム"
		},

		damage: 160,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-100」される。"
		}
	}, {
		cost: ["Water", "Lightning", "Psychic"],

		name: {
			'ja-jp': "エンジェライト"
		},

		effect: {
			'ja-jp': "相手のベンチポケモンを2匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。前の自分の番に、自分のポケモンが「エンジェライト」を使っていたなら、このワザは使えない。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card