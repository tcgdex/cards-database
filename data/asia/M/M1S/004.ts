import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベイリーフ"
	},
	illustrator: "nisimono",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	description: {
		'ja-jp': "首の周りから出されるスパイシーな香りを嗅いでいるとなぜだか戦いたくなる。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840543,
				tcgplayer: 647243,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "チコリータ"
	},
	attacks: [{
		name: {
			'ja-jp': "つきとばす"
		},
		damage: 50,
		effect: {
			'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]"
		},
		cost: ["Grass", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [153]
}

export default card
