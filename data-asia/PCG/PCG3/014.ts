import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いMuk",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [89],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "粘着性のグー",
			},
			effect: {
				ja: "暗いMukがあなたのアクティブなポケモンである限り、あなたの対戦相手は{{e}} {{e}} {{e}}} {{e}}}をより多く退却させます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ぬるぬるした水",
			},
			effect: {
				ja: "ディフェンディングポケモンリトリートコストの{{e}}エネルギーの数が10ダメージを与えます（リトリートコストに効果を適用した後）。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "酸性毒",
			},
			effect: {
				ja: "防御ポケモンは現在燃やされ、毒されています。",
			},
			damage: 10,
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
