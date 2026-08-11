import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒスイ ガーディ"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [58],
	hp: 80,
	types: ["Fighting"],

	description: {
		'ja-jp': "対になりて 縄張りを 哨戒す。 体毛に 火成岩なる 成分 混ざるは 火山活動の 影響と 推察す。"
	},

	stage: "Basic",

	attacks: [{


		name: {
			'ja-jp': "まるやけ"
		},

		effect: {
			'ja-jp': "場に出ているスタジアムをトラッシュする。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "とっしん"
		},

		damage: 40,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761535,
				tcgplayer: 566130,
			},
		},
	],

	retreat: 2
}

export default card