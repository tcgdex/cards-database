import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スリープ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	dexId: [96],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "突き出た 鼻を ひくひくさせると どこの だれが どんな 夢を 見ているのか 全部 わかるという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "むりやりねかす"
		},

		effect: {
			'ja-jp': "相手は相手自身のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをねむりにする。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ひっぱたく"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693161,
				tcgplayer: 568312,
			},
		},
	],

	retreat: 1,
}

export default card