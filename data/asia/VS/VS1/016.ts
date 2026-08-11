import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ホイットニーのペルシャ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [53],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "傷",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "フューリースワイプ",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
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
			stamp: ["1st-edition"],
		},
	],
};

export default card
