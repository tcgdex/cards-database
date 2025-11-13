import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "volbeat",
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
				ja: "余分な保護",
			},
			effect: {
				ja: "プレイ中に照らされている限り、対戦相手のPokã©Mon-Exからの攻撃によってVolbeatに行われる損傷を含むすべての効果を防​​ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "迅速",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
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
