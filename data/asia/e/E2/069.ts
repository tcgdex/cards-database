import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Houndour -069/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [228],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				'ja-jp': "FEINT攻撃",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、pok？ -  powers、pok？bodies、またはそのポケモンに対するその他の影響の影響を受けません。",
			},
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
