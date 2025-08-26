import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのvileplume",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "花粉防衛",
			},
			effect: {
				ja: "攻撃があなたのアクティブなPokmon <em>（たとえそれがノックアウトされていても）である間にエリカのvileplumeにダメージを与える場合、コインをひっくり返します。頭の場合、相手のアクティブなポクモンが混乱しています。エリカのvileplumeが眠っている、混乱し、麻痺しているときでさえ、この力は機能します。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "メガドレイン",
			},
			effect: {
				ja: "ErikaのVileplumeが防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、ErikaのVileplumeから多くのダメージカウンターを除去して、防御ポケモンに与えられたダメージの半分に等しい（最も近い10に丸められます）。 ErikaのVileplumeのダメージカウンターがそれよりも少ない場合、それらすべてを削除します。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
