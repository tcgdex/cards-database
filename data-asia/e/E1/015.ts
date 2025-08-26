import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "コルサラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [222],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "スパイクキャノン",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
