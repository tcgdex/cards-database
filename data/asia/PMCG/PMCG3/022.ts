import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラプラス",
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [131],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "ウォーターガン",
			},
			effect: {
				'ja-jp': "10のダメージに加えて、ラプラスに付着した各水エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},

		},
		{
			cost: ["Water", "Water"],
			name: {
				'ja-jp': "レイを混乱させます",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575688
			},
		},
	],
};

export default card
