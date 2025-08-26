import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "マグマー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [126],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "煙幕",
			},
			effect: {
				ja: "対戦相手の次のターン中、防御するポケモンが攻撃しようとする場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は起こりません。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "スモッグ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが毒されます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
