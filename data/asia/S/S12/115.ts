import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "レジエレキVMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "トランジスタ"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、自分のタイプのたねポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ダイライデン"
		},

		damage: 220,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680849,
				tcgplayer: 570173,
			},
		},
	],

	retreat: 0
}

export default card