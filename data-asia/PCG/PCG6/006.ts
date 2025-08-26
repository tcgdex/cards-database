import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "おしっこ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "体臭",
			},
			effect: {
				ja: "weezingがアクティブなポカモンである限り、ターンの間にポカンボディを持っている相手の各ポカモンに1つのダメージカウンターを1つのダメージカウンターに入れます。",
			},
		}],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "ミスト攻撃",
			},
			effect: {
				ja: "対戦相手の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "スラッジ渦",
			},
			damage: 50,
		},
	],

	retreat: 2,

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
