import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのスノーラックス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [143],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "落ち着きのない睡眠",
			},
			effect: {
				ja: "相手の攻撃がロケットのスノーラックスにダメージを与え、ロケットのスノーラックスがすでに眠っている場合（たとえノックアウトされていても）</em>、このパワーは攻撃ポクモンに20のダメージを与えます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "崩壊",
			},
			effect: {
				ja: "RocketのSnorlaxは現在眠っています（ダメージを受けた後）。",
			},
			damage: 20,
		},
	],

	retreat: 4,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
