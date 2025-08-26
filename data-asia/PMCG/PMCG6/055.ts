import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのミュウツー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "並置",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、RocketのMewtwoのダメージカウンターの数を、防御ポケモンのダメージカウンターの数を切り替えます（たとえそれがどちらのポケモンをノックアウトしますか）。 （ポケモンの1つにダメージカウンターがない場合は大丈夫です。）",
			},
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "催眠芽球",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
			},
			damage: 20,
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
