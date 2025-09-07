import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "ヴェノナト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [48],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "無効にします",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御するポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "PSYBEAM",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
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
