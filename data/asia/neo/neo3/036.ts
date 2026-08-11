import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "セレビ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [251],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "タイムトラベル",
			},
			effect: {
				ja: "対戦相手の攻撃がセレビをノックアウトする場合、コインをひっくり返します。頭の場合、セレビはノックアウトされず、それをシャッフルし、すべてのカードをデッキに取り付けます。セレビがすでに眠っている、混乱し、麻痺している場合、この力は機能しません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "サイキックダメージ",
			},
			effect: {
				ja: "3コインをフリップします。各ヘッドについて、ディフェンディングポケモンに1つのダメージカウンターを置きます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
