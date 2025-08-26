import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いドラゴナイト",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "奇跡的な風",
			},
			effect: {
				ja: "軽いドラゴナイトがアクティブなポクモンである限り、各特別エネルギーカードは通常のタイプではなく無色のエネルギーを提供し、その他の効果は機能しなくなります。このパワーは、軽いドラゴナイトが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "光波",
			},
			effect: {
				ja: "対戦相手の次のターン中に、ダメージ以外のダメージ以外のすべての影響を防ぎます。",
			},
			damage: 40,
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
