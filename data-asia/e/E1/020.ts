import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ディグレット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "フューリーヘッドバット",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
