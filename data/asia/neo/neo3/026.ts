import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "ラントン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [171],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "水没",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、ターンの終わりまでLanturnのタイプを水に変更することができます。 Lanturnが眠ったり、混乱したり、麻痺している場合、この力は使用できません。このパワーを使用した後にラントンが眠り、混乱し、麻痺した場合、そのタイプは稲妻に戻ります。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				ja: "盲目の光",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
