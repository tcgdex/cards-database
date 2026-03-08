import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "アイビサウルス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [2],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "リーチシード",
			},
			effect: {
				ja: "この攻撃からのすべての損傷が防止されない限り、イビサウルスから1つのダメージカウンターを削除することができます。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "つる鞭",
			},
			damage: 40,
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
