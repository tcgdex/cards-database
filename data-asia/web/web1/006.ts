import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "うなり声",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [58],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "突進",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "ember",
			},
			effect: {
				ja: "Growlitheに取り付けられたFire Energyカードを捨てるか、この攻撃は何もしません。",
			},
			damage: 30,
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
