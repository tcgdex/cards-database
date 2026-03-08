import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "コーフィッシュ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [341],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "外骨格",
			},
			effect: {
				ja: "攻撃によるコーフィッシュに与えられた損害は、衰弱と抵抗を適用した後）10増加します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ダブルチョップ",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
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
