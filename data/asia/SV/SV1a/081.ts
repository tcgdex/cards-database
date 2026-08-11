import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "クワッス"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [912],
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "昔 遠い 土地から やって来て 棲みついた。 羽から 分泌する ジェルは 水と 汚れを 弾く。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "ジェルかけ"
		},

		damage: 20,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701538,
				tcgplayer: 568204,
			},
		},
	],

	retreat: 1
}

export default card