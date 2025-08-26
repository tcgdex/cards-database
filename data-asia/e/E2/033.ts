import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Voltorb -033/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "迅速",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感、抵抗、pok？-Powers、pok？-bodies、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 20,
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
