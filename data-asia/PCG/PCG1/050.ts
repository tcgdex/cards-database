import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "催眠",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [97],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "不気味なオーラ",
			},
			effect: {
				ja: "Hypnoがアクティブなポカモンである限り、ターンの間に眠っている各ポカモンに2つのダメージカウンターを入れます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "催眠線",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
