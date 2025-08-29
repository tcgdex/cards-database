import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルダック",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [55],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "PsyShock",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "ハイパービーム",
			},
			effect: {
				ja: "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
			},
			damage: 20,
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
