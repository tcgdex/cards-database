import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョルテオンスター",
	},

	rarity: "Rare Holo",
	category: "Pokemon",
	dexId: [135],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "イエローレイ",
			},
			effect: {
				ja: "ターン中に、Jolteon {{Star | ThisPokã©Mon}}を手からベンチに置くと、各アクティブなPokã©Mon（あなたと対戦相手の両方）に1つのダメージカウンターを置くことができます。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、攻撃を含む攻撃のすべての影響を防ぎ、ジョルテオン{{star | this pokemon}}に敵の次のターン中に行われます。",
			},
			damage: 40,
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
