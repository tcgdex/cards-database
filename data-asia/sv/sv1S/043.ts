import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ワルビル"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [552],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "薄い 膜で 被われている 両目は 真夜中でも 見える。 数匹の 群れで 暮らしている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "しっぺがえし"
		},

		damage: "30＋",

		effect: {
			ja: "相手のサイドの残り枚数が1枚なら、90ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "どつく"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card