import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ライチュウ"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	dexId: [26],
	hp: 140,
	types: ["Lightning"],

	description: {
		'ja-jp': "尻尾が アースの 役目をはたして 電気を 地面に 逃がすので 自分自身は しびれたりしない。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "エレキチャージ"
		},

		effect: {
			'ja-jp': "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'ja-jp': "10まんボルト"
		},

		damage: 200,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。"
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
				cardmarket: 707670,
				tcgplayer: 565936,
			},
		},
	],

	retreat: 1,
}

export default card