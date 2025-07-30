import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "クロイスター",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [91],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "外骨格",
			},
			effect: {
				ja: "攻撃によってCloysterに与えられた損害は、衰弱と抵抗を適用した後）20増加します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "二重バブル",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。いずれかのコインがヘッドである場合、防御ポケモンは麻痺しています。",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "シェル攻撃",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
