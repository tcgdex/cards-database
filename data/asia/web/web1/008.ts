import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Vulpix",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				'ja-jp': "foxfire",
			},
			effect: {
				'ja-jp': "ダメージを与える前に、対戦相手のベンチ付きポケモンの1つで防御ポケモンを切り替えることができます。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
