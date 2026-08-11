import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エレザード"
	},
	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	description: {
		'ja-jp': "襟巻を広げて太陽光を浴びると大都会で使われる電気を1匹で発電する。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840591,
				tcgplayer: 647283,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "エリキテル"
	},
	attacks: [{
		name: {
			'ja-jp': "せんこうだん"
		},
		damage: 20,
		effect: {
			'ja-jp': "相手のバトルポケモンをこんらんにする。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			'ja-jp': "ヘッドボルト"
		},
		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [695]
}

export default card
