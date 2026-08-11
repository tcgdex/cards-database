import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "yなしy",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			name: {
				'ja-jp': "収量[収量]",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、デッキを検索してサイキックエネルギーカードを探して、名前が付けられていないポケモンの1枚にそれを取り付けます。その後、デッキをシャッフルします。この力は、眠っていない、眠っていても混乱している、または麻痺している場合でも使用できます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "隠された力",
			},
			damage: 10,
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
