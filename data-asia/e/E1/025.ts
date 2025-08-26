import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ピッジー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [16],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ペック",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "フューリーストライク",
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
