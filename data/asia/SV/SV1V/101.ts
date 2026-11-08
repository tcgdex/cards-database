import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ワナイダーex"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "トラップテリトリー"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、相手のバトルポケモンのにげるためのエネルギーは、1個ぶん多くなる。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "ワイヤーハング"
		},

		damage: "90＋",

		effect: {
			'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693176,
				tcgplayer: 568327,
			},
		},
	],

	retreat: 2
}

export default card