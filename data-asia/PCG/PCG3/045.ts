import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "サンドシュー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [27],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "リアキック",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "迅速",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
