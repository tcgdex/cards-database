import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "馬",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [116],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "水工場",
			},
			effect: {
				'ja-jp': "廃棄の山を検索して、最大2枚の水エネルギーカードを獲得し、相手に見せて、手に入れてください。",
			},
		},
		{
			cost: ["Water", "Water"],
			name: {
				'ja-jp': "迅速",
			},
			effect: {
				'ja-jp': "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
