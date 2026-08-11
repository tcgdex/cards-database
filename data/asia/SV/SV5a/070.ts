import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゴウカザル"
	},

	illustrator: "Krgc",
	category: "Pokemon",
	dexId: [392],
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "頭で 燃える 炎の ように 激しい 性格の ポケモン。 素早さでは だれにも 負けない。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "かえんぶとう"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分の手札から「基本エネルギー」と「基本エネルギー」をそれぞれ1枚まで選び、自分のポケモンに好きなようにつける。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "バーンアウト"
		},

		damage: 200,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761530,
				tcgplayer: 566125,
			},
		},
	],

	retreat: 1,
}

export default card