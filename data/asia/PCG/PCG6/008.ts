import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "volbeat",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [313],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "余分な保護",
			},
			effect: {
				'ja-jp': "プレイ中に照らされている限り、対戦相手のPokã©Mon-Exからの攻撃によってVolbeatに行われる損傷を含むすべての効果を防​​ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
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
