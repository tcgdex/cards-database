import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ベルダム",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [374],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "磁気呼び出し",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、デッキを検索して、金属製の基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。ベルダムが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "金属電荷",
			},
			effect: {
				ja: "ベルダムに1つのダメージカウンターを置きます。",
			},
			damage: 30,
		},
	],

	retreat: 2,

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
