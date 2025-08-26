import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "レジロックスター",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [377],
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "排水を掘ります",
			},
			effect: {
				ja: "Regirock {{star | this Pokemon}}から1つのダメージカウンターを取り外します。",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "最終的な爆発",
			},
			effect: {
				ja: "対戦相手が1枚の賞カードのみを残し、Regirock {{star | this pokemon}}が唯一のポケモンである場合、この攻撃のベースダメージは30ではなく100です。",
			},
			damage: 30,
		},
	],

	retreat: 3,

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
