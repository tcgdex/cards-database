import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ドドリオ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [85],
	hp: 80,
	types: [],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "速い足",
			},
			effect: {
				ja: "ドドリオは、眠っている、または麻痺している間も後退することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "報復",
			},
			effect: {
				ja: "ダメージ数のダメージ数は、ドドリオのダメージ数を10回行います。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スラッシングストライク",
			},
			effect: {
				ja: "コインをひっくり返します。テールの場合、ドドリオは次のターン中にスラッシングストライクを使用できません。",
			},
			damage: 40,
		},
	],


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
