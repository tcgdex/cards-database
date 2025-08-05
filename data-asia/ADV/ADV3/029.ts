import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "spoink",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [325],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "バウンス",
			},
			effect: {
				ja: "攻撃の後、ベンチ付きポケモン1匹でSpoinkを切り替えることができます。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
