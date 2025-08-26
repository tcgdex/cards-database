import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Snorlax",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [143],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "厚い皮",
			},
			effect: {
				ja: "Snorlaxは眠り、混乱し、麻痺し、毒され、燃やされることはできません。このパワーは機能しなくなり、Snorlaxは特別な状態の影響を受けます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ボディスラム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 30,
		},
	],

	retreat: 4,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
