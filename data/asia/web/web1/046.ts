import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ザプドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				'ja-jp': "稲妻の火傷",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドの場合、そして相手がベンチポケモンを持っている場合は、それらの1つを選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）尾の場合、ザプドスはそれ自体に30のダメージを与えます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
