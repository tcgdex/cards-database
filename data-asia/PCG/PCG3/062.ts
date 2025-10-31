import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Rocket's Snorlax Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [143],
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ダークヒーラー",
			},
			effect: {
				ja: "RocketのSnorlax Exがそれに付着した暗闇のエネルギーを持っている限り、RocketのSnorlax Exからターンの1つのダメージカウンターを削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "毒爪",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "崩壊",
			},
			effect: {
				ja: "RocketのSnorlax Exは今眠っています。",
			},
			damage: 60,
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
